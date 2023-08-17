import { Link } from 'react-router-dom';

import { Button } from 'reactstrap';

import styles from './CharacterListNavigation.module.css';

interface IPropsCharacterListNavigation {
    getResponse: Function,
    prevPage: string | null,
    nextPage: string | null,
    counterPage: number,
}

const CharacterListNavigation: React.FC<IPropsCharacterListNavigation> = ({
    getResponse,
    prevPage,
    nextPage,
    counterPage
}) => {
    const handleChangeNext = () => getResponse(nextPage);
    const handleChangePrev = () => getResponse(prevPage);

    return (
        <div className={styles.container}>
            <Link
                to={`/characters/?page=${counterPage-1}`}
                className={styles.link}
            >
                <Button
                    onClick={handleChangePrev}
                    disabled={!prevPage}
                    color='primary'
                    className={styles.button}
                >
                    Previous
                </Button>
            </Link>
    
            <Link
                to={`/characters/?page=${counterPage+1}`}
                className={styles.link}
            >
                <Button
                    onClick={handleChangeNext}
                    disabled={!nextPage}
                    color='primary'
                    className={styles.button}
                >
                    Next
                </Button>
            </Link>
        </div>
    )
}

export default CharacterListNavigation;
