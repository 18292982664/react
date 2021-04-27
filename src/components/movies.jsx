import React, { Component } from "react";
import { getMovies } from '../services/fakeMovieService'
import { getGenres } from '../services/fakeGenreService'
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
  //获取数据
  componentDidMount() {
    this.setState({
      movies: getMovies(),
      genres: getGenres()
    })
  }
  handleGenreSelect = (genre) => {
    this.setState({
      selectedGenre: genre
    })
  }
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies })
  }
  getPagedData = () => {
    const { selectedGenre, movies: allMovies } = this.state;
    console.log('1', selectedGenre)
    console.log('2', allMovies)
    let filtered = selectedGenre && selectedGenre != "全部电影"
      ? allMovies.filter(v => v.genres.indexOf(selectedGenre) >= 0)
      : allMovies
    return { totalCount: filtered.length, movies: filtered }
  }
  render() {
    const { genres, selectedGenre } = this.state;
    const { totalCount, movies } = this.getPagedData();
    let element = <h1 className="content-main text-center">没有内容</h1>
    return (
      <div className="container ">
        <div className="row">
          <div className="col-2">
            <ListGroup
              items={genres}
              selectedItem={selectedGenre}
              onItemSelect={this.handleGenreSelect} />
          </div>
          {
            totalCount ? (
              <div className="col" >
                <div>共{totalCount}条数据</div>
                <MoviesTable movies={movies} onLike={this.handleLike} />
              </div>) :
              (<div className="col" >{element}</div>)
          }
        </div>
      </div>
    )
  }
}

export default Movies;
