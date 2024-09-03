import { apiUrl } from "../../utils/const";
import "./VideoMain.scss";

function VideoMain({ video }) {
  return (
    <div className="video">
      <video className="video__img" poster={`${apiUrl}/public${video.image}`} controls>
        <source src={video.video} />
      </video>
    </div>
  );
}

export default VideoMain;
