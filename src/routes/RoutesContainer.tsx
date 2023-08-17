import { Routes, Route } from 'react-router-dom';

import routesConfig from './routesConfig';

const RoutesContainer: React.FC = () => {
    return (
        <Routes>
            {routesConfig.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                />
            ))}
        </Routes>
    );
}

export default RoutesContainer;
