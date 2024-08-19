import VideoItem from "../VideoItem/VideoItem";
import videos from "../../data/video-details.json";
import "./VideoList.scss";

export default function VideoList({ selectedVideo, setSelectedVideo }) {
  const list = videos.filter((p) => p.id !== selectedVideo.id);

  return (
    <section className="vidlist">
      <h2 className="vidlist__heading">Next Videos</h2>
      <ul className="nav__list">
        {list.map((video) => (
          <VideoItem
            key={video.id}
            video={video}
            setSelectedVideo={setSelectedVideo}
          />
        ))}
      </ul>
    </section>
  );
}
