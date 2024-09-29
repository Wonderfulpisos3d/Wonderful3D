import React, { useState } from 'react';

const VideoPlayer = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const handleVideoClick = (index) => {
    setCurrentVideo(index);
  };

  const data = [
    // Your video data goes here...
    {
        "id": "a1",
        "title": "QUÉ ES EL PORCELANATO LÍQUIDO: TODO LO QUE NECESITAS SABER",
        "url": "https://firebasestorage.googleapis.com/v0/b/fir-proyect-7e9ea.appspot.com/o/pisos_en_porcelanato_l%C3%ADquido_-_parte_1%20(1080p).mp4?alt=media&token=e3eda626-bf42-47c8-a556-25534780d0d3",
        "duration": "24:26"
    },
    {
        "id": "a2",
        "title": ""
    }
  ];

  return (
    <main className="container">
      <section className="main-video">
        <video src={data[currentVideo].url} controls muted></video>
        <h3 className="title">{data[currentVideo].title}</h3>
      </section>

      <section className="video-playlist">
        <h3 className="title">Title of Video Playlist</h3>
        <p>10 lessons &nbsp; . &nbsp; 50m 48s</p>
        <div className="videos">
          {data.map((video, index) => (
            <div
              key={video.id}
              className={`video ${index === currentVideo ? 'active' : ''}`}
              onClick={() => handleVideoClick(index)}
              data-id={video.id}
            >
              <img src={index === currentVideo ? 'images/pause.svg' : 'images/play.svg'} alt="" />
              <p>{index + 1 > 9 ? index + 1 : '0' + (index + 1)}.</p>
              <h3 className="title">{video.title}</h3>
              <p className="time">{video.duration}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default VideoPlayer;