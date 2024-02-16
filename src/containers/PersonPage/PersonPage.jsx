import PropTypes from 'prop-types';
import React, { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '@context/ThemeProvider';

import PersonPhoto from '@components/PersonPage/PersonPhoto';
import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonFilms from "@components/PersonPage/PersonFilms";
import PersonLinkBack from '@components/PersonPage/PersonLinkBack';

import UiLoading from '@ui/UiLoading';

import { getApiResource } from '@utils/network';
import { getPeopleImage } from '@services/getPeopleData';
import { API_PERSON } from '@constants/api';

import styles from './PersonPage.module.css';

const PersonPage = ({ setErrorApi }) => {
    const [personId, setPersonId] = useState(null);
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);
    const [personFilms, setPersonFilms] = useState(null);
    const [personFavorite, setPersonFavorite] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    const [colorLoader, setColorLoader] = useState('blue');
    const isTheme = useTheme();

    const storeData = useSelector(state => state.favoriteReducer);

    const { id } = useParams();

    useEffect(() => {
        (async () => {
            setPersonFavorite(!!storeData[id]);
            setPersonId(id);

            const res = await getApiResource(`${API_PERSON}/${id}/`);

            if (res) {
                setPersonInfo([
                    { title: 'Height', data: res.height },
                    { title: 'Mass', data: res.mass },
                    { title: 'Hair Color', data: res.hair_color },
                    { title: 'Skin Color', data: res.skin_color },
                    { title: 'Eye Color', data: res.eye_color },
                    { title: 'Birth Year', data: res.birth_year },
                    { title: 'Gender', data: res.gender },
                ]);
                setPersonName(res.name);
                setPersonPhoto(getPeopleImage(id));
    
                res.films.length && setPersonFilms(res.films);
            }

            setErrorApi(!res);

            setIsLoading(false);
        })();
    }, []);

    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGHT: setColorLoader('black'); break;
            case THEME_DARK: setColorLoader('white'); break;
            case THEME_NEITRAL: setColorLoader('blue'); break;
            default: setColorLoader('blue');
        }
    }, [isTheme]);

    return (
        <>
            <PersonLinkBack />

            <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>
                <div className={styles.container}>

                    <PersonPhoto
                        personId={personId}
                        personPhoto={personPhoto}
                        personName={personName}
                        personFavorite={personFavorite}
                        setPersonFavorite={setPersonFavorite}
                    />

                    {personInfo && <PersonInfo personInfo={personInfo} />}

                    {isLoading && <UiLoading theme={colorLoader} />}
                    {personFilms && <PersonFilms personFilms={personFilms} />}
                    
                </div>
            </div>
        </>
    )
}

PersonPage.propTypes = {
	setErrorApi: PropTypes.func,
}

export default withErrorApi(PersonPage);
