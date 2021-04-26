import React, { Component } from "react";
import { getMovies } from '../services/fakeMovieService'
import { getGenres } from '../services/fakeMovieService'
import ListGroup from './list/listGroup'
import MoviesTable from './table/moviesTable'
class Movies extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],//电影数组
      genres: [],//分类数组
      selectedGenre: "全部电影"
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col-2"><ListGroup /></div>
        <div className="col"><MoviesTable /></div>
      </div>
    )
  }
}

export default Movies;
