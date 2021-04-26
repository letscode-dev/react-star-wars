import { HTTP, HTTPS } from '@constants/api';

/**
 * Изменяет URL с HTTP на HTTPS
 * @param {String} url - url для изменения
 * @return {String} - url с HTTPS
 */
export const changeHTTP = url => {
    return url ? url.replace(HTTP, HTTPS) : url;
}

/**
 * Отправляет запрос Fetch
 * @param {String} url - url для запроса
 * @return {Promise} - Promise с результатом запроса
 */
export const getApiResource = async (url) => {
	try {
		const res = await fetch(url);

		if (!res.ok) {
			console.error('Could not fetch.', res.status);
			return false;
		}

		return await res.json();
	} catch (error) {
		console.error('Could not fetch.', error.message);
		return false;
	}
}

// (async () => {
// 	const body = await getApiResource('https://swapi.dev/api/planets/1zzz/');
// 	console.log(body);
// })();

/**
 * Отправляет несколко запросов Fetch из массива URL
 * @param {Array<String>} urls - массив с URL для запроса
 * @return {Promise} - Promise с результатом запросов
 */
export const makeConcurrentRequest = async (urls) => {
    const res = await Promise.all(urls.map(res => {
		return fetch(res).then(res => res.json())
	 }))

	 return res;
};
