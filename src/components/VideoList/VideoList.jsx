import VideoItem from "../VideoItem/VideoItem";
// // import videos from "../../data/video-details.json";
import "./VideoList.scss";


// //replacing .json with api
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// import { apiKey, apiUrl } from '../../utils/const';


// export default function VideoList({ selectedVideo, setSelectedVideo }) {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     axios.get(`${apiUrl}/videos?api_key=${apiKey}`)
//       .then(response => {
//         setVideos(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching videos:', error);
//       });
//   }, [selectedVideo]);

//   const filteredList = videos.filter((p) => p.id !== selectedVideo.id);

//   return (
//     <section className="vidlist">
//       <h2 className="vidlist__heading">Next Videos</h2>
//       <ul className="nav__list">
//         {filteredList.map((video) => (
//           <VideoItem
//             key={video.id}
//             video={video}
//             setSelectedVideo={setSelectedVideo}
//           />
//         ))}
//       </ul>
//     </section>
//   );
// }

// export function VideoDetail() {
//   const { id } = useParams();
//   const [video, setVideo] = useState(null);

//   useEffect(() => {
//     axios.get(`${apiUrl}/videos/${id}?api_key=${apiKey}`)
//       .then(response => {
//         setVideo(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching video details:', error);
//       });
//   }, [id]);

//   if (!video) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1>{video.title}</h1>
//     </div>
//   );
// }








// sprint1
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


