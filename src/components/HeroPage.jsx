import CountdownTimer from "./CountDownTimer";
import "../styles/HeroPage.css";

export default function HeroPage({ common, onViewInvitation, onRSVP }) {
  return (
    <div className="hero-page">

      {/* Background overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <p className="hero-tagline">{common.tagline}</p>

        <div className="hero-date">{common.weddingDateDisplay}</div>

        <CountdownTimer targetDate={common.weddingDate} />

        <div className="hero-buttons">
            <button
                className="btn-outline"
                onClick={() => document.getElementById("invite-section").scrollIntoView({ behavior: "smooth" })}
            >
                View Invitation
            </button>
            <button
                className="btn-filled"
                onClick={() => document.getElementById("rsvp-section").scrollIntoView({ behavior: "smooth" })}
            >
                RSVP Now
            </button>
        </div>
      </div>
    </div>
  );
}