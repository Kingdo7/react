import './MovieItem.css';

const style = {
  cursor: "pointer"
};

const MovieItem = (props) => {
  //console.log(props); // -----------------------------------------------------------------
  return <div onClick={() => props.updateSelected(props.movie._id)} 
  className="movieItem card text-center m-2" 
  data-bs-toggle="modal" 
  data-bs-target="#movie-details-modal" 
  style= {style}
  >
    <img src={props.movie.img} alt="Affiche du film" className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">{props.movie.title}</h5>
      <hr className="w-75 mx-auto" />
      <p className="card-text">{props.movie.details}</p>
    </div>
  </div>
};

export default MovieItem;
