import React, { Component } from "react";
import { connect } from "react-redux";
import { removeArticle, removeMovieFavorite } from "../../actions/index";
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {/* Aqui deberias poner tu lista de peliculas! */
          this.props.favMovies && this.props.favMovies.map((peli)=> (
            <li>{peli.title},
            <button onClick={()=>this.props.removeMovieFavorite(peli.id)}>X</button>
            </li>
          ))
          }
        </ul>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    favMovies: state.movies//el buscador solo se suscribe a moviesLoaded del store
  };
};

function mapDispatchToProps(dispatch) {//me pasa como prop el dispatch de actions
  return {
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie)),//la prop addMovieFavorite dispacha la action  
  };
};            
export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

