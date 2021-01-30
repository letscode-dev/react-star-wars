import {
    SWAPI_PARAM_PAGE,
    HTTP, SWAPI_ROOT, SWAPI_PEOPLE,
    URL_IMG_PERSON, GUIDE_IMG_EXTESION
} from '@constants/api';

//-----------------------------------------------
// Получить ID страницы для персонажей
//-----------------------------------------------
export const getPeoplePageId = url => {
    const pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
    const id = url.slice(pos+SWAPI_PARAM_PAGE.length, url.length);

    return Number(id);
}

//-----------------------------------------------
// Получить ID персонажа по URL
//-----------------------------------------------
const getId = (url, category) => {
    const id = url
        .replace(HTTP+SWAPI_ROOT+category, '')
        .replace(/\//g, '')

    return id;
}

export const getPeopleId = url => getId(url, SWAPI_PEOPLE);

//-----------------------------------------------
// Получить изображение для персонажа
//-----------------------------------------------
export const getPeopleImage = id => `${URL_IMG_PERSON}/${id+GUIDE_IMG_EXTESION}`;
