import playbackvid from "@/assets/playback.mp4";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        src={playbackvid}
      ></video>
    </div>
  );
};

export default Video;
