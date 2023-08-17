import {
    SWAPI_PARAM_PAGE,
    HTTP, HTTPS, SWAPI_ROOT, SWAPI_PEOPLE,
    URL_IMG_PERSON, GUIDE_IMG_EXTENSION
} from '../constants/api';

export const getPeoplePageId = (url: string): number => {
    const pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
    const id = url.slice(pos+SWAPI_PARAM_PAGE.length);

    return Number(id);
}

const checkProtocol = (url: string): string => {
    if (url.indexOf(HTTPS) !== -1) {
        return HTTPS;
    }

    return HTTP;
}

const getId = (url: string, category: string): string => {
    const protocol = checkProtocol(url);

    const id = url
        .replace(protocol+SWAPI_ROOT+category, '')
        .replace(/\//g, '')

    return id;
}

export const getPeopleId = (url: string) =>
    getId(url, SWAPI_PEOPLE);

export const getPeopleImage = (id: string) =>
    `${URL_IMG_PERSON}/${id+GUIDE_IMG_EXTENSION}`;
