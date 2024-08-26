import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoMain from "../../components/VideoMain/VideoMain";
import VideoMainDetails from "../../components/VideoMainDetails/VideoMainDetails";
import CommentList from "../../components/CommentList/CommentList";
import VideoList from "../../components/VideoList/VideoList";
import { apiUrl, apiKey } from "../../utils/const";
import axios from "axios";

function HomePage() {
    const { id } = useParams();
    const [videos, setVideos] = useState([])
    const [video, setVideo] = useState({})

    let defaultVideoId = null;

    if (videos.length > 0) {
        defaultVideoId = videos[0].id;
    }

    let videoIdToDisplay = id ?? defaultVideoId;

    const filteredVideos = videos.filter(video => video.id !== videoIdToDisplay)
    console.log(filteredVideos);

    useEffect(() => {
        const getVideos = async () => {
            const { data } = await axios.get(`${apiUrl}/videos?api_key=${apiKey}`);
            console.log(data);
            setVideos(data);
        }

        getVideos();
    }, [])


    useEffect(() => {
        const getVideo = async () => {
            const { data } = await axios.get(`${apiUrl}/videos/${videoIdToDisplay}?api_key=${apiKey}`);
            console.log(data);
            setVideo(data);
        }

        getVideo();
    }, [videoIdToDisplay])

    console.log(videos)
    console.log("video", video)

    return (
        <>

            <VideoMain video={video} />

            <main className="main">

                <div>
                    <VideoMainDetails selectedVideo={video} />
                    <CommentList comments={video.comments} />
                </div>

                <VideoList
                    videos={filteredVideos}
                />
            </main>


        </>
    );
}

export default HomePage;
