import './MovieItem.scss';

const style = {
  cursor: 'pointer',
};

const MovieItem = (props) => (
  <div
    style={style}
    onClick={() => props.updateMovie(props.movie._id)}
    className="movieItem card text-center m-2"
    data-bs-toggle="modal"
    data-bs-target="#movie-details-modal">
    <img
      src={props.movie.img}
      alt="Affiche du film"
      className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">{props.movie.title}</h5>
      <hr className="w-75 mx-auto" />
      <p className="card-text">{props.movie.details}</p>
    </div>
    <div class="card-footer">
        <span class="badge badge-success mr-5"><i class="fa fa-eye" aria-hidden="true">New</i></span>
            <a href=""><i class="fa fa-thumbs-up text-info ml-5" aria-hidden="true"></i></a>
            <a href=""><i class="fa fa-thumbs-up text-secondary ml-5" aria-hidden="true"></i></a>
    </div>
  </div>
);

export default MovieItem;
