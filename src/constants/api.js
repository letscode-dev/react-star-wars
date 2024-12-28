// swapi base URL
export const SWAPI_ROOT = "https://swapi.py4e.com/api";
export const SWAPI_PEOPLE = "/people";
export const SWAPI_PARAM_PAGE = "/?page=";
export const SWAPI_PARAM_SEARCH = "/?search=";

export const API_PEOPLE = SWAPI_ROOT + SWAPI_PEOPLE + SWAPI_PARAM_PAGE;
export const API_PERSON = SWAPI_ROOT + SWAPI_PEOPLE;
export const API_SEARCH = SWAPI_ROOT + SWAPI_PEOPLE + SWAPI_PARAM_SEARCH;

// visualguide
const GUIDE_ROOT_IMG = "https://starwars-visualguide.com/assets/img/";
const GUIDE_PEOPLE = "characters";
export const GUIDE_IMG_EXTENSION = ".jpg";

export const URL_IMG_PERSON = GUIDE_ROOT_IMG + GUIDE_PEOPLE;
