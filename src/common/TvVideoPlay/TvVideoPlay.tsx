import "./TvVideoPlay.css";

const TvVideoPlay = () => {
  return (
    <div className="TvVideo">
      <div className="tv-main">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          alt=""
        />
        <div className="tv-Vid">
          <video autoPlay playsInline muted loop >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default TvVideoPlay;
