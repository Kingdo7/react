import { MovieItem } from "..";
import MovieDetails from "../details/MovieDetails";

const MovieList = (props) => {
  return <div className="movieList d-flex flex-wrap justify-content-center">
    {props.movies.map((m) => (
      <MovieItem  updateSelected={props.updateSelected} key={m._id} movie={m} />
    ))}
  </div>
};

export default MovieList;
