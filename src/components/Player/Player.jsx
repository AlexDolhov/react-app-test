import { useRef } from "react";

const Player = ({ source }) => {
    const playerRef = useRef();

    /*const play = () => playerRef.current.play().then(() => {
    }).catch(error => {
        if (error.toString().toLowerCase().includes("interrupted")) {
            console.log("error in catch:", error);
    } else {
        throw error;
    } });*/
    
    const play = () => {
        console.log("Player Ref:", playerRef.current);
        return playerRef.current.play();
    }

    const pause = () => playerRef.current.pause();

    return (
      <>
        <video
          controls
          width="250"
          ref={playerRef}
          src={source}
          type="video/mp4"
        >
          Sorry your browser does not support embeded players
        </video>
        <button onClick={play}>PLAY</button>
        <button onClick={pause}>PAUSE</button>
      </>
    );
};

export default Player;