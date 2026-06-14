import { useState } from "react";
import "../styles/CurtainOpener.css";

export default function CurtainOpener({ common, sideConfig, onOpen }) {
  const [opening, setOpening] = useState(false);
  const isBride = sideConfig.side === "bride";

  const handleOpen = () => {
    setOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1400);
  };

  return (
    <div className={`curtain-scene ${opening ? "open" : ""}`}>

      {/* Top valance */}
      <div className="top-valance">
        <svg className="valance-scallop" viewBox="0 0 380 22" preserveAspectRatio="none">
          <path
            d="M0,0 Q19,22 38,0 Q57,22 76,0 Q95,22 114,0 Q133,22 152,0 Q171,22 190,0
               Q209,22 228,0 Q247,22 266,0 Q285,22 304,0 Q323,22 342,0 Q361,22 380,0
               L380,0 L0,0 Z"
            fill="#6B0000"
          />
        </svg>
      </div>

      {/* Tassels */}
      <div className="tassels-row">
        {[...Array(7)].map((_, i) => (
          <div className="tassel" key={i}>
            <div className="tassel-ball" />
            <div className="tassel-string" />
            <div className="tassel-fringe">
              {[...Array(5)].map((_, j) => <span key={j} />)}
            </div>
          </div>
        ))}
      </div>

      {/* Left curtain */}
      <div className="curtain-left">
        <div className="curtain-fabric left-fabric">
          <div className="curtain-shimmer" />
          <div className="curtain-fold fold-right" />
        </div>
      </div>

      {/* Right curtain */}
      <div className="curtain-right">
        <div className="curtain-fabric right-fabric">
          <div className="curtain-shimmer" />
          <div className="curtain-fold fold-left" />
        </div>
      </div>

      {/* Center content */}
      <div className="curtain-center">
        <p className="invite-label">The Wedding of</p>
        <div className="names-row">
          <span className="person-name">{isBride ? common.bride : common.groom}</span>
          <span className="heart-icon">♥</span>
          <span className="person-name">{isBride ? common.groom : common.bride}</span>
        </div>
        <div className="gold-divider" />
        <p className="wedding-date">{common.weddingDateDisplay}</p>
        <button className="open-btn" onClick={handleOpen}>
          Open Invitation
        </button>
      </div>
    </div>
  );
}
