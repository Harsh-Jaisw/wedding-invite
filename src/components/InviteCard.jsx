import "../styles/InviteCard.css";

export default function InviteCard({ common, sideConfig }) {
  const isBride = sideConfig.side === "bride";

  return (
    <section className="invite-section" id="invite-section">
      <p className="section-eyebrow">With Blessings</p>
      <h2 className="section-heading">The Invitation</h2>
      <div className="gold-line" />

      <div className="invite-card">
        {/* Corner borders */}
        <span className="corner tl" />
        <span className="corner tr" />
        <span className="corner bl" />
        <span className="corner br" />

        <p className="family-names">
          Mr. &amp; Mrs. {isBride ? "Mishra" : "Bajpai"} &nbsp;·&nbsp; Mr. &amp; Mrs. {isBride ? "Bajpai" : "Mishra"}
        </p>
        <p className="request-text">
          request the honour of your presence at the wedding of their beloved children
        </p>

        <div className="couple-names">
          <span className="name-big">{isBride ? common.bride : common.groom}</span>
          <span className="ampersand">&amp;</span>
          <span className="name-big">{isBride ? common.groom : common.bride}</span>
        </div>

        <div className="card-gold-dot">◆</div>

        <p className="wedding-when">
          Wednesday · {common.weddingDateDisplay} · 8 PM
        </p>
        <p className="wedding-venue">{common.venue}</p>

        {/* Events row */}
        <div className="events-row">
          {sideConfig.events.map((e) => (
            <div className="event-box" key={e.name}>
              <span className="event-box-name">{e.name}</span>
              <span className="event-box-detail">{e.date} · {e.time || "4 PM"}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}