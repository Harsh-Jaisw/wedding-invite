import { useState, useEffect, useRef } from "react";
import "../styles/AudioPlayer.css";

export default function AudioPlayer({ src }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    // Auto play on first user interaction with page
    const tryPlay = () => {
      audio.play().then(() => {
        setPlaying(true);
      }).catch(() => {
        setPlaying(false);
      });
      window.removeEventListener("click", tryPlay);
    };

    window.addEventListener("click", tryPlay);
    return () => window.removeEventListener("click", tryPlay);
  }, []);

  const toggle = (e) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src} loop />
      <button
        className={`audio-btn ${playing ? "playing" : "paused"}`}
        onClick={toggle}
        title={playing ? "Pause Music" : "Play Music"}
      >
        {/* Vinyl disc */}
        <div className="disc">
          <div className="disc-inner" />
        </div>

        {/* Play / Pause icon */}
        <div className="audio-icon">
          {playing ? (
            // Pause bars
            <svg viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            // Play triangle
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </div>

        {/* Sound waves (visible when playing) */}
        {playing && (
          <div className="sound-waves">
            <span /><span /><span />
          </div>
        )}
      </button>
    </>
  );
}