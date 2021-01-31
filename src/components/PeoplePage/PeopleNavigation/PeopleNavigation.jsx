import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import UiButton from '@ui/UiButton';

import styles from './PeopleNavigation.module.css';

const PeopleNavigation = ({
    getResponse,
    prevPage,
    nextPage,
    counterPage
}) => {
    const handleChangeNext = () => getResponse(nextPage);
    const handleChangePrev = () => getResponse(prevPage);

    return (
        <div className={styles.container}>
            <Link to={`/people/?page=${counterPage-1}`}>
                <UiButton
                    text="Previous"
                    onClick={handleChangePrev}
                    disabled={!prevPage}
                    classes={styles.buttons}
                />
            </Link>
            <Link to={`/people/?page=${counterPage+1}`}>
                <UiButton
                    text="Next"
                    onClick={handleChangeNext}
                    disabled={!nextPage}
                    classes={styles.buttons}
                />
            </Link>
        </div>
    )
}

PeopleNavigation.propTypes = {
    getResponse: PropTypes.func,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string,
    counterPage: PropTypes.number,
}

export default PeopleNavigation;
