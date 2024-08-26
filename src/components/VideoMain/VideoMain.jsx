import "./VideoMain.scss";
import axios from 'axios';

function VideoMain({ video }) {
  return (
    <div className="video">
      <video className="video__img" poster={video.image} controls>
        <source src={video.video} />
      </video>
    </div>
  );
}

export default VideoMain;
