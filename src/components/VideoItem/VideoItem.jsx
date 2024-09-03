import { Link } from 'react-router-dom';
import "./VideoItem.scss";
import { apiUrl } from '../../utils/const';

function VideoItem({ video }) {
  const scrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  return (
    <Link
      className="item"
      to={`/videos/${video.id}`}

      onClick={scrollUp}
    >
      <img className="item__image" src={`${apiUrl}/public${video.image}`} alt={video.title} />
      <div className="item__text">
        <p className="item__text--title">{video.title}</p>
        <p>{video.channel}</p>
      </div>
    </Link >
  );
}

export default VideoItem;
