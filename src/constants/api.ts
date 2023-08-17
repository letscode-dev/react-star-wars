// Common
export const HTTPS: string = 'https://';
export const HTTP: string = 'http://';

// Swapi
export const SWAPI_ROOT: string = 'swapi.dev/api/';
export const SWAPI_PEOPLE: string = 'people';
export const SWAPI_PARAM_PAGE: string = '/?page=';
export const SWAPI_PARAM_SEARCH: string = '/?search=';

export const API_PEOPLE: string = HTTPS+SWAPI_ROOT+SWAPI_PEOPLE+SWAPI_PARAM_PAGE;
export const API_PERSON: string = HTTPS+SWAPI_ROOT+SWAPI_PEOPLE;
export const API_SEARCH: string = HTTPS+SWAPI_ROOT+SWAPI_PEOPLE+SWAPI_PARAM_SEARCH;

// VisualGuide
const GUIDE_ROOT_IMG: string = 'https://starwars-visualguide.com/assets/img/';
const GUIDE_PEOPLE: string = 'characters';
export const GUIDE_IMG_EXTENSION: string = '.jpg';

export const URL_IMG_PERSON: string = GUIDE_ROOT_IMG+GUIDE_PEOPLE;
