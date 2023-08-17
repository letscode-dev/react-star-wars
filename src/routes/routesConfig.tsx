import CharacterList from '../pages/CharacterList';
import CharacterInformation from '../pages/CharacterInformation';
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';

interface IRoutesConfig {
    path: string,
    element: React.ReactElement;
}

const routesConfig: IRoutesConfig[] = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/characters',
        element: <CharacterList />,
    },
    {
        path: '/character/:id',
        element: <CharacterInformation />,
    },
    {
        path: '/search',
        element: <SearchPage />
    },
];

export default routesConfig;
