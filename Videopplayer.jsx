// import React, { useRef, useEffect } from 'react';
// import './videoplayer.css';
// import video from '../../video.mp4'; 

// const Videopplayer = ({ playState, setPlayState }) => {
//   const playerRef = useRef(null);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     if (playState && videoRef.current) {
//       console.log("Attempting to play video...");
//       videoRef.current.load(); // Reload video to reset state
//       videoRef.current
//         .play()
//         .then(() => console.log("Video started playing"))
//         .catch((err) => console.error("Error playing video:", err));
//     }
//   }, [playState]);

//   const closePlayer = (e) => {
//     if (playerRef.current && e.target === playerRef.current) {
//       setPlayState(false);
//     }
//   };

//   return (
//     <div className={`video-player ${playState ? '' : 'hide'}`} ref={playerRef} onClick={closePlayer}>
//       <button className="close-btn" onClick={() => setPlayState(false)}>X</button>
//       <video ref={videoRef} src={video} muted controls></video>
//     </div>
//   );
// };

// export default Videopplayer;
