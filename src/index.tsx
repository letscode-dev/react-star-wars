import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { REPO_NAME } from './constants/repo';
import RoutesContainer from './routes/RoutesContainer';

import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);
const basename = process.env.NODE_ENV === 'production' ? `/${REPO_NAME}/` : '/';

root.render(
    <BrowserRouter basename={basename}>
        <Header />
        <RoutesContainer />
    </BrowserRouter>
);
