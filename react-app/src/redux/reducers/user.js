//import { type as findCurrentItemType } from '../actions/findCurrentItem';


const defaultState = {};

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case 'ADD_USER':
            return payload;
        default:
            return state;
    }
}

export default reducer;
