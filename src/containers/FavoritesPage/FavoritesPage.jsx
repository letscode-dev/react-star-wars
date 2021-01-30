import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import PeopleList from '@components/PeoplePage/PeopleList';

import styles from './FavoritesPage.module.css';

const FavoritesPage = () => {
    const [people, setPeople] = useState(null);

    const storeData = useSelector(state => state.favoriteReducer);

    useEffect(() => {
        const arr = Object.entries(storeData);

        const res = arr.map(item => {
            return {
                id: item[0],
                ...item[1]
            }
        })

        setPeople(res);
    }, []);

    return (
        <>
            <h1 className="header__text">Favorites</h1>
            {people ? <PeopleList people={people} /> : <h1>No data</h1> }
        </>
    )
}

export default FavoritesPage;
