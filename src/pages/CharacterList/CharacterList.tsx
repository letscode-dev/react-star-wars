import { useState, useEffect } from 'react';

import { getList } from '../../services/people/people';
import { IPeopleModel } from '../../services/people/types';
import { changeHTTP } from '../../utils/network';
import { getPeoplePageId } from '../../utils/getPeopleData';
import { getPeopleResponse } from '../../utils/getPeopleResponse';
import { API_PEOPLE } from '../../constants/api';
import { ICharactersList } from '../../types/people';
import { useQueryParams } from '../../hooks/useQueryParams';

import CharacterListData from './CharacterListData';
import CharacterListNavigation from './CharacterListNavigation';

const CharacterList: React.FC = () => {
    const [people, setPeople] = useState<ICharactersList[]>([]);
    const [prevPage, setPrevPage] = useState<string | null>(null);
    const [nextPage, setNextPage] = useState<string | null>(null);
    const [counterPage, setCounterPage] = useState<number>(1);

    const query = useQueryParams();
    const queryPage = query.get('page');

    const getResponse = async (params: string) => {
        const res = await getList(params);

        if (res) {
            const resList = res as IPeopleModel;
            const peopleList = getPeopleResponse(resList);

            setPeople(peopleList);
            setNextPage(changeHTTP(resList.next));
            setPrevPage(changeHTTP(resList.previous));
            setCounterPage(params ? getPeoplePageId(params) : 1);
        }
    };

    useEffect(() => {
        getResponse(API_PEOPLE+queryPage);
    }, []);

    return (
        <>
            <CharacterListNavigation
                getResponse={getResponse}
                prevPage={prevPage}
                nextPage={nextPage}
                counterPage={counterPage}
            />
            {people.length && <CharacterListData people={people} />}
        </>
    )
}

export default CharacterList;
