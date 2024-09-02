import "./VideoMainDetails.scss";

function VideoMainDetails({ selectedVideo }) {
  return (
    <div className="video">
      <h1>{selectedVideo.title}</h1>


      <div className="video-details">

        <div className="video-details__components">
          <div className="video-details__views-likes">
            <h2>By {selectedVideo.channel}</h2>
            <p className="grey">{new Date(selectedVideo.timestamp).toLocaleDateString()}</p>
          </div>

          <div className="video-details__views-likes">
            <p className="grey">
              <img
                src="src/assets/icons/views.svg"
                alt="Views"
                className="icon"
              />
              {selectedVideo.views}</p>
            <p className="grey">
              <img
                src="src/assets/icons/likes.svg"
                alt="Likes"
                className="icon"
              />
              {selectedVideo.likes}</p>
          </div>
        </div>
      </div>
      <p className="description">{selectedVideo.description}</p>

    </div>
  );
}

export default VideoMainDetails;
