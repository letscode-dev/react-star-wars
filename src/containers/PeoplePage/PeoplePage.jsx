import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { withErrorApi } from '@hoc-helpers/withErrorApi';
import PeopleNavigation from '@components/PeoplePage/PeopleNavigation';
import PeopleList from '@components/PeoplePage/PeopleList';
import { useQueryParams } from '@hooks/useQueryParams';

import { getApiResource, changeHTTP } from '@utils/network';
import { getPeopleImage, getPeopleId, getPeoplePageId } from '@services/getPeopleData';
import { API_PEOPLE } from '@constants/api';

const PeoplePage = ({ setErrorApi }) => {
    const [people, setPeople] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [counterPage, setCounterPage] = useState(1);

    const query = useQueryParams();
    const queryPage = query.get('page');

    const getResponse = async (url) => {
        const res = await getApiResource(url);

        if (res) {
            const peopleList = res.results.map(({ name, url}) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id);
    
                return {
                    id,
                    name,
                    img,
                }
            });
    
            setPeople(peopleList);
            setNextPage(changeHTTP(res.next));
            setPrevPage(changeHTTP(res.previous));
            setCounterPage(getPeoplePageId(url));
        }

        setErrorApi(!res);
    };

    useEffect(() => {
        getResponse(API_PEOPLE+queryPage);
    }, []);

    return (
        <>
            <PeopleNavigation
                getResponse={getResponse}
                prevPage={prevPage}
                nextPage={nextPage}
                counterPage={counterPage}
            />
            {people && <PeopleList people={people} />}
        </>
    )
}

PeoplePage.propTypes = {
	setErrorApi: PropTypes.func,
}

export default withErrorApi(PeoplePage);
