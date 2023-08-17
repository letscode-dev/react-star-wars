import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Table } from 'reactstrap';

import { get } from '../../services/people/people';
import { IPersonModel } from '../../services/people/types';
import { getPeopleImage } from '../../utils/getPeopleData';
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';
import { getPersonConfig } from './config';

import FieldInput from '../../components/FormFields/FieldInput';

import styles from './CharacterInformation.module.css';

const LOCALSTORAGE_KEY: string = 'CharacterInformation';

const CharacterInformation: React.FC = () => {
    const [personInfo, setPersonInfo] = useState<Partial<IPersonModel>>(getLocalStorage(LOCALSTORAGE_KEY));
    const [personName, setPersonName] = useState<string>('');
    const [personPhoto, setPersonPhoto] = useState<string>('');

    const { id = '' } = useParams();

    const config = getPersonConfig(personInfo);

    useEffect(() => {
        (async () => {
            const res = await get(id) as IPersonModel;

            if (res) {
                setPersonInfo({
                    height: res.height,
                    mass: res.mass,
                    birth_year: res.birth_year,
                    gender: res.gender,
                });
                setPersonName(res.name);
                setPersonPhoto(getPeopleImage(id));
            }
        })();
    }, []);

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        name: string,
    ): void => {
        const { value } = event.target;

        setPersonInfo((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        });
    };

    const handleSubmit = (): void => {
        setLocalStorage(LOCALSTORAGE_KEY, personInfo);
    }

    return (
        <div className={styles.container}>
            <img className={styles.photo} src={personPhoto} alt={personName} />
            <div className={styles.content}>
                <h4 className={styles.title}>{personName}</h4>

                {personInfo && (
                    <Table>
                        <tbody>
                            {config.map(({ title, name, value }) => (
                                value && (
                                    <tr key={name}>
                                        <td>{title}</td>
                                        <td>
                                            <FieldInput
                                                name={name}
                                                value={value}
                                                handleChange={handleChange}
                                            />
                                        </td>
                                    </tr>
                                )
                            ))}
                        </tbody>
                    </Table>
                )}

                <Button
                    color="primary"
                    onClick={handleSubmit}
                >
                    Save in LocalStorage
                </Button>
            </div>
        </div>
    )
}

export default CharacterInformation;
