import { MovieItem } from "..";

//NextMovie = MovieItem.all()

const NextMovieDetails = ({ NextMovie }) => {
  return <div id="movie-details-modal" className="modal fade">
    <div className="modal-dialog">
      <div className="modal-content">
        
        <div className="modal-header">
          <img src={NextMovie.movie.img}
            alt="Affiche du film"
            className="card-img-top" />
          <h5 className="modal-title">
            {NextMovie?.title}
          </h5>
          <button className="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <div className="modal-body text-center">
          <h5>{NextMovie?.details}</h5>
          <p>{NextMovie?.desc}</p>
        </div>

      </div>
    </div>
  </div>
};

export default NextMovieDetails;
