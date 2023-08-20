import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import './Playbutton.css';

const PlayPauseButton = ({ streamUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef();

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} src={streamUrl}></audio>
      <button className="play-pause-button" onClick={togglePlayPause}>
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>
    </div>
  );
};

export default PlayPauseButton;
