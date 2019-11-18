const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case 'FIND_MOVIES':
            return                 {
                year:payload.year,
                movies:payload.movies
            }
            
            ;
        default:
            return state;
    }
}

export default reducer;
