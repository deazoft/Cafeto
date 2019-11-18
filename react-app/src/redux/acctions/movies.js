export const findMovies = obj => {
    return {
        type: 'FIND_MOVIES',
        payload: {
            year:obj.year,
            movies:obj.movies
        }
    }
};



