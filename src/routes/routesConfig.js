import HomePage from '@containers/HomePage';
import PeoplePage from '@containers/PeoplePage';
import PersonPage from '@containers/PersonPage';
import SearchPage from '@containers/SearchPage';
import FavoritesPage from '@containers/FavoritesPage';
import NotFoundPage from '@containers/NotFoundPage';

import ErrorMessage from '@components/ErrorMessage';

const routesConfig = [
    {
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        path: '/people',
        exact: true,
        component: PeoplePage
    },
    {
        path: '/people/:id',
        component: PersonPage
    },
    {
        path: '/search',
        exact: true,
        component: SearchPage
    },
    {
        path: '/favorites',
        exact: true,
        component: FavoritesPage
    },
    {
        path: '/fail',
        exact: true,
        component: ErrorMessage
    },
    {
        path: '/not-found',
        exact: true,
        component: NotFoundPage
    },
    {
        path: '*',
        exact: false,
        component: NotFoundPage
    },
];

export default routesConfig;
