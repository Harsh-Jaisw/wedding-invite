import "../styles/LoveStory.css";

export default function LoveStory({ common }) {
  return (
    <section className="love-story-section">
      <p className="ls-eyebrow">Our Journey</p>
      <h2 className="ls-heading">A Love Story</h2>
      <div className="gold-line" />

      <div className="timeline">
        {common.loveStory.map((item, i) => (
          <div
            className={`timeline-item ${item.side === "right" ? "right" : "left"}`}
            key={i}
          >
            <div className="timeline-card">
              <span className="timeline-year">{item.year}</span>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-desc">{item.description}</p>
            </div>
            <div className="timeline-dot" />
          </div>
        ))}
        <div className="timeline-line" />
      </div>
    </section>
  );
}