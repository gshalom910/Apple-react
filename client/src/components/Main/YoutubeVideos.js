import { useEffect, useState } from "react";

function YoutubeVideos() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBetWP5cwoqNPhNqLwAA1CJT6R0tAvket0&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=8"
    )
      .then((res) => res.json())
      .then((data) => {
        const youTubeVideos = data.items;
        setVideos(youTubeVideos);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(videos);
  return (
    <>
      <div className="container">
        <div className="title-wraper bold text-center mt-5 pb-4">
          Latest Videos
        </div>
        <div className="row">
          {videos?.map((video, i) => {
            return (
              <div
                key={i}
                className="left-side-wrapper col-sm-12 pb-sm-5 col-md-6"
              >
                <div className="left-side-container">
                  <div className="card rounded">
                    <a
                      href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                      target="_blank"
                    >
                      <img
                        className="card-img-top"
                        src={video.snippet.thumbnails.medium.url}
                        alt="thumbnail"
                      />
                    </a>
                    <div className="card-body bg-light-grey">
                      <a
                        href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                        target="_blank"
                      >
                        <h5 className="video-title">{video.snippet.title}</h5>
                      </a>
                      <p className="card-text grey">
                        {video.snippet.description}
                      </p>
                      <p className="text-right p-date">
                        Published Date: {video.snippet.publishedAt}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default YoutubeVideos;
