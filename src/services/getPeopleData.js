import {
  SWAPI_PARAM_PAGE,
  SWAPI_ROOT,
  SWAPI_PEOPLE,
  URL_IMG_PERSON,
  GUIDE_IMG_EXTENSION,
} from "@constants/api";

export const getPeoplePageId = (url) => {
  const pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
  const id = url.slice(pos + SWAPI_PARAM_PAGE.length);
  return Number(id);
};

export const getPeopleId = (url) => {
  const id = url.replace(SWAPI_ROOT + SWAPI_PEOPLE, "").replace(/\//g, "");
  return id;
};

export const getPeopleImage = (id) =>
  `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSION}`;
