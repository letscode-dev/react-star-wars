import {
    HTTP, SWAPI_ROOT, SWAPI_PEOPLE,
    GUIDE_IMG_EXTENSION, URL_IMG_PERSON,
    SWAPI_PARAM_PAGE
} from '@constants/api';

export const getPeoplePageId = url => {
    const pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
    const id = url.slice(pos+SWAPI_PARAM_PAGE.length, url.length);

    return Number(id);
}

const getId = (url, category) => {
    const id = url
        .replace(HTTP+SWAPI_ROOT+category, '')
        .replace(/\//g, '')

    return id;
}

export const getPeopleId = url => getId(url, SWAPI_PEOPLE);

export const getPeopleImage = id => `${URL_IMG_PERSON}/${id+GUIDE_IMG_EXTENSION}`;
