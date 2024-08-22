import "./VideoItem.scss";
import axios from 'axios';


function VideoItem({ video, setSelectedVideo }) {
  return (
    <li
      className="item"
      onClick={() => {
        setSelectedVideo(video);
      }}
    >
      <img className="item__image" src={video.image} alt={video.title} />
      <div className="item__text">
        <p className="item__text--title">{video.title}</p>
        <p>{video.channel}</p>
      </div>
    </li>
  );
}

export default VideoItem;
