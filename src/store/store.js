import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; 
import { setLocalStorage } from '@utils/localStorage';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
    setLocalStorage('store', store.getState().favoriteReducer)
});

export default store;
