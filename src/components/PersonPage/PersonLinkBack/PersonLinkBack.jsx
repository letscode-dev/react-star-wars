import { useHistory } from 'react-router-dom';
import iconBack from './img/back.svg';

import styles from './PersonLinkBack.module.css';

const PersonLinkBack = () => {
    const history = useHistory();

    const handleGoBack = e => {
        e.preventDefault();
        history.goBack();
    }

    return (
        <a
            href="#"
            onClick={handleGoBack}
            className={styles.link}
        >
            <img className={styles.link__img} src={iconBack} alt="Go back"/>
            <span>Go back</span>
        </a>
    )
}

export default PersonLinkBack;
