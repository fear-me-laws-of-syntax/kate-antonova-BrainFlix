import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoMain from "../../components/VideoMain/VideoMain";
import VideoMainDetails from "../../components/VideoMainDetails/VideoMainDetails";
import CommentList from "../../components/CommentList/CommentList";
import VideoList from "../../components/VideoList/VideoList";
import { apiUrl } from "../../utils/const";
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

    useEffect(() => {
        const getVideos = async () => {
            try {
                const { data } = await axios.get(`${apiUrl}/videos`);
                console.log(data);
                setVideos(data);
            }
            catch (err) {
                console.log(err)
            }
        }

        getVideos();
    }, [])


    useEffect(() => {
        const getVideo = async () => {
            if (!videoIdToDisplay) return;
            try {
                const { data } = await axios.get(`${apiUrl}/videos/${videoIdToDisplay}`);
                console.log(data);
                setVideo(data);
            }
            catch (err) {
                console.log(err)
            }
        }

        getVideo();
    }, [videoIdToDisplay])


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
