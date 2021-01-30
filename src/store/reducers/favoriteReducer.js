import { omit } from 'lodash';
import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from '@store/constants/actionTypes';
import { getLocalStorage } from '@utils/localStorage';

const initialState = getLocalStorage('store');

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PERSON_TO_FAVORITE:
            return {
                ...state, 
                ...action.payload
            }
        case REMOVE_PERSON_FROM_FAVORITE: {
            return omit(state, [action.payload])
        }
        default:
            return state;
    }
};

export default favoriteReducer;

// case REMOVE_PERSON_FROM_FAVORITE: {
//     const { [action.payload]: temp, ...rest } = state;
//     return rest;
// }
