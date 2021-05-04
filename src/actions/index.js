//ARCHIVO ACTIONS
export const ADD_MOVIE_FAVORITE='ADD_MOVIE_FAVORITE';
export const REMOVE_MOVIE_FAVORITE='REMOVE_MOVIE_FAVORITE';
export const GET_MOVIES='GET_MOVIES';




export function addMovieFavorite(payload) {//action que agrega la movie
  return { 
      type: ADD_MOVIE_FAVORITE, 
      payload,//la movie a agregar viene de la data de getmovie
  };
}
  
export function removeMovieFavorite(payload) {//action que elimina la movie
  return { 
    type: REMOVE_MOVIE_FAVORITE, 
    payload,//la movie a agregar viene de la data de getmovie
  };
}
  
export function getMovies(titulo) {
  return function(dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=20dac387&s=" + titulo)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: GET_MOVIES, payload: json });//busca la data y despacha getmovies con eso
      });
    };
}


export function getMovieDetail(id) {
    return function(dispatch) {
      return fetch("http://www.omdbapi.com/?apikey=20dac387&i=" +id)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: 'GET_MOVIE_DETAIL', payload: json });//busca la data y despacha getmoviedetail con eso
        });
    };
}