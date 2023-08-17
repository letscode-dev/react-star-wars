import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.list__container}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/characters/?page=1">Characters</NavLink></li>
                <li><NavLink to="/search">Search</NavLink></li>
            </ul>
        </div>
    )
}

export default Header;
