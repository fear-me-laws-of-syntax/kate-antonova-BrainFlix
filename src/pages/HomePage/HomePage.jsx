
function HomePage() {

    const [selectedVideo, setSelectedVideo] = useState(videos[0]);
    return (
        <>
            <div>
                <Header />
                <VideoMain video={selectedVideo} />
            </div>

            <main className="main">

                <div>
                    <VideoMainDetails selectedVideo={selectedVideo} />
                    <CommentList comments={selectedVideo.comments} />
                </div>

                {/* <VideoList
                    selectedVideo={selectedVideo}
                    setSelectedVideo={setSelectedVideo}
                /> */}
            </main>

        </>
    );
}

export default HomePage;
