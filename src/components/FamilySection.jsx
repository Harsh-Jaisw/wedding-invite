import "../styles/FamilySection.css";

export default function FamilySection({ common }) {
  const { groom, bride } = common.families;

  return (
    <section className="family-section">
      <p className="family-eyebrow">With Blessings Of</p>
      <h2 className="family-heading">Our Families</h2>
      <div className="gold-line" />

      <div className="family-cards">

        {/* Groom's Family */}
        <div className="family-card">
          <span className="corner tl" />
          <span className="corner tr" />
          <span className="corner bl" />
          <span className="corner br" />

          <p className="family-label" style={{ color: "#4FC3F7" }}>
            {groom.label}
          </p>
          <div
            className="family-label-line"
            style={{ background: "linear-gradient(to right, transparent, #4FC3F7, transparent)" }}
          />
          <p className="family-parents">{groom.parents}</p>
          <div className="family-members">
            {groom.members.map((m) => (
              <p className="family-member-row" key={m.name}>
                {m.name}
                <span className="member-relation">— {m.relation}</span>
              </p>
            ))}
          </div>
        </div>

        {/* Bride's Family */}
        <div className="family-card">
          <span className="corner tl" />
          <span className="corner tr" />
          <span className="corner bl" />
          <span className="corner br" />

          <p className="family-label" style={{ color: "#E91E8C" }}>
            {bride.label}
          </p>
          <div
            className="family-label-line"
            style={{ background: "linear-gradient(to right, transparent, #E91E8C, transparent)" }}
          />
          <p className="family-parents">{bride.parents}</p>
          <div className="family-members">
            {bride.members.map((m) => (
              <p className="family-member-row" key={m.name}>
                {m.name}
                <span className="member-relation">— {m.relation}</span>
              </p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}