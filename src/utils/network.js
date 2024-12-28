/**
 * Отправляет запрос Fetch
 * @param {String} url - url для запроса
 * @return {Promise} - Promise с результатом запроса
 */
export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error("Could not fetch.", res.status);
      return false;
    }

    return await res.json();
  } catch (error) {
    console.error("Could not fetch.", error.message);
    return false;
  }
};

export const makeConcurrentRequest = async (urls) => {
  try {
    const res = await Promise.all(
      urls.map((url) => fetch(url).then((res) => res.json()))
    );
    return res;
  } catch (error) {
    console.error("Could not fetch concurrent requests.", error.message);
    return false;
  }
};
