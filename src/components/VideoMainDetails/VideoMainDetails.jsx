import "./VideoMainDetails.scss";

function VideoMainDetails({ selectedVideo }) {
  return (
    <div className="video-details">
      <h1>{selectedVideo.title}</h1>

      <div>
        <div>
          <h2>{selectedVideo.channel}</h2>
          <p>{new Date(selectedVideo.timestamp).toLocaleDateString()}</p>
        </div>

        <div>
          <p>Views:{selectedVideo.views}</p>
          <p>Likes: {selectedVideo.likes}</p>
        </div>
      </div>

      <p>{selectedVideo.description}</p>
    </div>
  );
}

export default VideoMainDetails;
