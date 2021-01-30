import { useLocation } from 'react-router-dom';

// Синтаксический анализ строки запроса
export const useQueryParams = () => {
    return new URLSearchParams(useLocation().search);
}
