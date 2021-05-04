import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import './Buscador.css';

// import * as '../../actions/index.js'
import {getMovies, addMovieFavorite, getMovieDetail} from '../../actions'


export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {//agarra el estado del prop
      title: ""//titulo de la peli que se busca
    };
  };
  handleChange(event) {
    this.setState({ title: event.target.value });//cada valor que cambia del input cambia el state title
  };
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
    // var newmovies= this.props.getMovies;
  };

  render() {
    const { title } = this.state;
    return (
      <div>

        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}//el state es el value del input, el titulo de la peli
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>

        <ul>

         {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */
          this.props.movies && this.props.movies.map((peli)=> (
          <li>
            <NavLink to={`/movie/${peli.imdbID}`} onClick={()=>this.props.getMovieDetail(peli.imdbID)}>
            {peli.Title}
            </NavLink>
            <button onClick={(e)=> this.props.addMovieFavorite({title: peli.Title, id: peli.imdbID})}>FAV</button>
          </li>))
         }
        </ul>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,//el buscador solo se suscribe a moviesLoaded del store
  };
};

function mapDispatchToProps(dispatch) {//me pasa como prop el dispatch de actions
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),//la prop addMovieFavorite dispacha la action
    getMovies: title => dispatch(getMovies(title)),
    getMovieDetail: id=> dispatch(getMovieDetail(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);

// export default Buscador;
