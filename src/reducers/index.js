//REDUCERS (4)

const initialState = {
    movies: [],//lista de pelis favs
    moviesLoaded: [],//pelis cargadas
    movieDetail: {}//details
};


function rootReducer(state = initialState, action) {
    if (action.type === "ADD_MOVIE_FAVORITE") {
        return {
          ...state,
          movies: state.movies.concat(action.payload),
        }
    };
    if (action.type === 'GET_MOVIES') {
        return {
          ...state,
          moviesLoaded: action.payload.Search,
        };
    };
    if (action.type === "GET_MOVIE_DETAIL") {
        return {
          ...state,
          movieDetail: action.payload
        };
    };
    if (action.type === "REMOVE_MOVIE_FAVORITE") {
        return {
          ...state,
          movies: state.movies.filter( pelicula=>pelicula.id!==action.payload),
        };
    };
    return state;
}
  
export default rootReducer;//lo exportamos al store para que sepa que reducer usar