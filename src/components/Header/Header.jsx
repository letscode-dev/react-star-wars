import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.list__container}>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/people/?page=1" exact>People</NavLink></li>
                <li><NavLink to="/not-found" exact>Not Found</NavLink></li>
            </ul>
        </div>
    )
}

export default Header;
