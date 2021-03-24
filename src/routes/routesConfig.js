import HomePage from '@containers/HomePage';
import PeoplePage from '@containers/PeoplePage';

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
    }
];

export default routesConfig;
