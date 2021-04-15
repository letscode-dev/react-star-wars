import HomePage from '@containers/HomePage';
import PeoplePage from '@containers/PeoplePage';
import PersonPage from '@containers/PersonPage';
import NotFoundPage from '@containers/NotFoundPage';

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
        exact: true,
        component: PersonPage
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
    }
];

export default routesConfig;
