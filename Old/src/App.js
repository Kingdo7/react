import { Component } from "react";
import { Header, Loading } from "./components";
import { MovieDetails, MovieList } from "./features/movies/components";
import SearchBar from "./features/movies/components/search-bar/SearchBar";
import { Movie } from "./features/movies/movie";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [], //data.movies,
      selected: {}
    }; 
    //this.updateSelected("6efd3c20-5e43-4a61-b64e-5f328a6300cd");
  }
/*
  componentDidMount(){
    const promise = fetch('https://api.themoviedb.org/3/discover/movie?api_key=8d58a44ee735007d3061b6271a1806b4');

    promise.then(res => res.json())
    .then((data) => data.results)
    .then((movies) => {
      movies = movies.map( (movie) => ({
        title: movie.title,
        _id: movie.id,
        img: "https://api.themoviedb.org" + movie.poster_path,
        desc: movie.overview,
        details: movie.popularity

      }) )
    })
    //.then((movies) => this.setState({ movies }))
    /*
    this.setState({
      movies: data.results
    });
    *
  }*/
  async componentDidMount(){
    const options = {
      header: {
        'Content-Type': 'application/JSON;charset-uft-8',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDU4YTQ0ZWU3MzUwMDdkMzA2MWI2MjcxYTE4MDZiNCIsInN1YiI6IjYyMjlkNGQ4MDY5ZjBlMDAxZDlmM2VhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cuV_9dxpVt1Zf1MsKdh8a12sfgWKUw6efyHTVQONEoM'
      }
    }

    try {
      let movies = await fetch('https://api.themoviedb.org/4/discover/movie', options)
        .then(res => res.json())
        .catch(console.error)
        .then(data => data.results)
        .catch(console.error);
  
      if (!movies.length) throw new Error("Nope !");
      movies = movies.map(m => new Movie(
        m.id,
        m.title,
        'https://image.tmdb.org/t/p/w500' + m.poster_path,
        `${m.release_date} | ${m.vote_average}/10 (${m.vote_count})`,
        m.overview
      ));
      this.setState({ movies });
    }
    catch (e) {
      console.error(e);
    }
  }

  updateSelected = (idMovie) => {
    const movie = this.state.movies.find(m => m._id === idMovie);
    this.setState({ selected: movie });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header />
        <SearchBar />
        {this.state.movies.length ?
          <>
            <MovieList
              updateSelected={this.updateSelected}
              movies={this.state.movies} />
            <MovieDetails selectedMovie={this.state.selected} />
          </>
        :
          <Loading />
        }
      </div>
    );
  }
}

export default App;