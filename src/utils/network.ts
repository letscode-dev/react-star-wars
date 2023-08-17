import { HTTP, HTTPS } from '../constants/api';

export const changeHTTP = (url: string | null): string | null =>
	url ? url.replace(HTTP, HTTPS) : url;

export const getApiResource = async <T>(url: string): Promise<T | boolean> => {
	try {
		const res = await fetch(url);

		if (!res.ok) {
			console.error('Could not fetch.', res.status);
			return false;
		}

		return await res.json();
	} catch (error) {
		console.error('Could not fetch.', error);
		return false;
	}
}
