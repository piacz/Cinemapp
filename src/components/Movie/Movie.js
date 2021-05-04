import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';
// import { NavLink } from 'react-router-dom';

import './Movie.css';


class Movie extends React.Component {
    
    // const movieId = this.props.match.params.id;


    render() {
        return (
            <div className="movie-detail">
                
                Detalle de la pelicula:
                <h1>{this.props.movieDetail.Title}</h1> 
                <h5>imdbRating: {this.props.movieDetail.imdbRating}</h5>
                <h5>Released: {this.props.movieDetail.Released}</h5>
                <h5>Director:
                    <p className='movieText'>{this.props.movieDetail.Director}</p>
                </h5>
                <h5>Runtime:
                    <p className='movieText'>{this.props.movieDetail.Runtime}</p>
                </h5>
                <h5>Plot:
                    <p className='movieText'>{this.props.movieDetail.Plot}</p>
                </h5>
                <img src={this.props.movieDetail.Poster} align="right"></img>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    //   favMovies: state.movies,//el buscador solo se suscribe a moviesLoaded del store
      movieDetail: state.movieDetail,
    };
};
  
function mapDispatchToProps(dispatch) {//me pasa como prop el dispatch de actions
    return {
      getMovieDetail: movie => dispatch(getMovieDetail(movie)),//la prop addMovieFavorite dispacha la action  
    };
}

export default connect(mapStateToProps, null)(Movie);


