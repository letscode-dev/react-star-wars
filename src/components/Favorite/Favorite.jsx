import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import icon from './img/bookmark.svg';

import styles from './Favorite.module.css';

const Favorite = () => {
    const [count, setCount] = useState();

    const storeDate = useSelector(state => state.favoriteReducer);

    useEffect(() => {
        const length = Object.keys(storeDate).length;
        length.toString().length > 2 ? setCount('...') : setCount(length);
    });

    return (
        <div className={styles.container}>
            <Link to="/favorites">
                <span className={styles.counter}>{count}</span>
                <img className={styles.icon} src={icon} alt="Favorites" />
            </Link>
        </div>
    )
}

export default Favorite;
