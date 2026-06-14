import "../styles/CuteInviteSection.css";

export default function CuteInviteSection({ common, sideConfig }) {
  const isBride = sideConfig.side === "bride";
  const { child } = sideConfig;

  return (
    <section className="cute-section">
      <div className="cute-inner">
        {/* Corners */}
        <span className="corner tl" />
        <span className="corner tr" />
        <span className="corner bl" />
        <span className="corner br" />

        {/* Top floral */}
        <div className="cute-floral">❧</div>

        <p className="cute-eyebrow">Special Invitation</p>

        {/* Child photo + name */}
        <div className="child-wrapper">
          <div
            className="child-photo"
            style={{ backgroundImage: `url(${child.image})` }}
          />
          {/* Bouncing emoji on photo */}
          <span className="child-emoji">🎀</span>
        </div>

        <p className="child-name">{child.name} says...</p>

        {/* Speech bubble */}
        <div className="speech-bubble">
          <p className="child-description">{child.description}</p>
        </div>

        <div className="cute-divider" />

        {/* Couple photos */}
        {/* <p className="cute-msg">{common.cuteInvite.message}</p> */}

        <div className="cute-couple-row">
          <div className="cute-person">
            <div
              className="cute-photo"
              style={{
                backgroundImage: isBride
                  ? `url(${common.images.bride})`
                  : `url(${common.images.groom})`,
              }}
            />
            <p className="cute-person-name">
              {isBride ? common.brideFull : common.groomFull}
            </p>
          </div>

          <div className="cute-heart">♥</div>

          <div className="cute-person">
            <div
              className="cute-photo"
              style={{
                backgroundImage: isBride
                  ? `url(${common.images.groom})`
                  : `url(${common.images.bride})`,
              }}
            />
            <p className="cute-person-name">
              {isBride ? common.groomFull : common.brideFull}
            </p>
          </div>
        </div>

        {/* <p className="cute-msg2">{common.cuteInvite.message2}</p> */}

        <div className="cute-divider" />

        {/* <p className="cute-quote">{common.cuteInvite.quote}</p> */}

        <div className="cute-floral">❧</div>
      </div>
    </section>
  );
}