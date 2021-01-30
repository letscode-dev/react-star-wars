import { HTTP, HTTPS } from '@constants/api';

/**
 * Изменяет с HTTP на HTTPS
 * @param {String} url - url для изменения
 * @return {String} - url с HTTPS
 */
export const changeHTTP = url => {
    const result = url ? url.replace(HTTP, HTTPS) : url;

    return result;
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
export const makeConcurrentRequest = urls => {
    return new Promise(resolve => {
        let result = [];
        let counter = 0;

        const makeRequest = index => {
            fetch(urls[index])
                .then(res => res.json())
                .then(body => {
                    result[index] = body;

                    if (urls.length-1 === counter) {
                        resolve(result);
                    } else {
                        counter++;
                        makeRequest(counter);
                    }
                })
        }

        makeRequest(0);
    });
};
