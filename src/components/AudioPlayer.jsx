import { useState, useEffect } from "react";
import "../styles/AudioPlayer.css";

export default function AudioPlayer({ audioRef }) {
  const [playing, setPlaying] = useState(true); // starts as true since music already playing

  useEffect(() => {

    const audio = audioRef.current;
    if (!audio) return;

    // Sync state with actual audio events
    const onPlay  = () => setPlaying(true);
    const onPause = () => setPlaying(false);

    audio.addEventListener("play",  onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      audio.removeEventListener("play",  onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, [audioRef]);

  const toggle = (e) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
  };

  return (
    <button
      className={`audio-btn ${playing ? "playing" : "paused"}`}
      onClick={toggle}
      title={playing ? "Pause Music" : "Play Music"}
    >
      {/* Vinyl disc */}
      <div className="disc">
        <div className="disc-inner" />
      </div>

      {/* Icon */}
      <div className="audio-icon">
        {playing ? (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </div>

      {/* Sound waves */}
      {playing && (
        <div className="sound-waves">
          <span /><span /><span />
        </div>
      )}
    </button>
  );
}