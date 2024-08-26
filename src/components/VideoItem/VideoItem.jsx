import { Link } from 'react-router-dom';
import "./VideoItem.scss";


function VideoItem({ video }) {
  return (
    <Link
      className="item"
      to={`/videos/${video.id}`}
    >
      <img className="item__image" src={video.image} alt={video.title} />
      <div className="item__text">
        <p className="item__text--title">{video.title}</p>
        <p>{video.channel}</p>
      </div>
    </Link>
  );
}

export default VideoItem;
