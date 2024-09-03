import VideoItem from "../VideoItem/VideoItem";
import "./VideoList.scss";

export default function VideoList({ videos }) {
  return (
    <section className="vidlist">
      <h2 className="vidlist__heading">Next Videos</h2>
      <nav className="nav__list">
        {videos.map((video) => (
          <VideoItem
            key={video.id}
            video={video}

          />
        ))}
      </nav>
    </section>
  );
}


