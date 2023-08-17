import { Link } from 'react-router-dom';

import { ICharactersList } from '../../../types/people';

import styles from './SearchPageInfo.module.css';

export interface IPropsSearchPageInfo {
	people: ICharactersList[];
}

const SearchPageInfo: React.FC<IPropsSearchPageInfo> = ({ people }) => {
    if (!people.length) {
        return <div className={styles.person__comment}>No results</div>
    }

    return (
        <ul className={styles.list__container}>
            {people.map(({ id, name, img }) =>
                <li className={styles.list__item} key={id}>
                    <Link to={`/character/${id}`}>
                        <img className={styles.person__photo} src={img} alt={name} />
                        <p className={styles.person__name}>{name}</p>
                    </Link>
                </li>
            )}
        </ul>
    )
}

export default SearchPageInfo;
