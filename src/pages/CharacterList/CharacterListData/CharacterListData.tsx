import { Link } from 'react-router-dom';
import { Card } from 'reactstrap';

import { ICharactersList } from '../../../types/people';

import styles from './CharacterListData.module.css';

export interface IPropsCharacterListData {
	people: ICharactersList[];
}

const CharacterListData: React.FC<IPropsCharacterListData> = ({ people }) => (
    <div className={styles.container}>
        {people.map(({ id, name, img }) =>
            <Card className={styles.item} key={id}>
                <Link to={`/character/${id}`}>
                    <img className={styles.photo} src={img} alt={name} />
                    <div className={styles.title}>{name}</div>
                </Link>
            </Card>
        )}
    </div>
)

export default CharacterListData;
