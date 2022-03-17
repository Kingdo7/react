import { MovieItem } from "..";

const NextMovie = (props) => {
  return <div className="NextMovie d-flex flex-wrap justify-content-center">
    {props.movies.map((m) => (
      <MovieItem
        updateMovie={props.updateSelected}
        key={m._id}
        movie={m} />
    ))}
  </div>
};

export default NextMovie;
