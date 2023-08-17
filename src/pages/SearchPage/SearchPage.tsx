import { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';
import { Input } from 'reactstrap';

import { IPeopleModel } from '../../services/people/types';
import { search } from '../../services/people/people';
import { getPeopleResponse } from '../../utils/getPeopleResponse';
import { ICharactersList } from '../../types/people';

import SearchPageInfo from './SearchPageInfo';

import styles from './SearchPage.module.css';

const SearchPage: React.FC = () => {
    const [inputSearchValue, setInputSearchValue] = useState<string>('');
    const [people, setPeople] = useState<ICharactersList[]>([]);

    const getResponse = async (params: string) => {
        const res = await search(params);

        if (res) {
            const resList = res as IPeopleModel;
            const peopleList = getPeopleResponse(resList);

            setPeople(peopleList);
        }
    };

    useEffect(() => {
        getResponse('');
    }, []);

    const debouncedGetResponse = useCallback(
        debounce(value => getResponse(value), 300),
        []
    );

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.target;

        setInputSearchValue(value);
        debouncedGetResponse(value);
    }

    return (
        <div className={styles.container}>
            <h1 className="header__text">Search</h1>

            <Input
                type="text"
                value={inputSearchValue}
                onChange={handleInputChange}
                placeholder="Input character's name"
                className={styles.input__search}
            />

            <SearchPageInfo people={people} />
        </div>
    )
}

export default SearchPage;
