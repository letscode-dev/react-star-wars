export const getLocalStorage = (key: string): Object => {
    const data = localStorage.getItem(key);

    if (data !== null) {
        return JSON.parse(data);
    }

    return {};
}

export const setLocalStorage = (key: string, data: Object) => {
    localStorage.setItem(key, JSON.stringify(data));
}
