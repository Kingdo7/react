const MovieDetails = ({ selected }) => {
  return <div id="movie-details-modal" className="modal fade">
    <div className="modal-dialog">
      <div className="modal-content">

        <div className="modal-header">
          <h5 className="modal-title">
            {selected.title}
          </h5>
          <button className="btn-close" data-bs-dissmiss="modal"></button>

          <div className="modal-body text-center">
            <h5>{selected.details}</h5>
            <p>{selected.desc}</p>
          </div>
        </div>
        
      </div>
    </div>
  </div>
};

export default MovieDetails;
