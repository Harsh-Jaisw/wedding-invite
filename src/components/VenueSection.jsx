import "../styles/VenueSection.css";

export default function VenueSection({ common }) {
  return (
    <section className="venue-section">
      <p className="venue-eyebrow">Venue</p>
      <h2 className="venue-heading">Find Us Here</h2>
      <div className="gold-line" />

      <div className="venue-body">
        {/* Map */}
        <div className="venue-map">
          <iframe
            title="Venue Map"
            src={common.venueMapUrl}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Details */}
        <div className="venue-details">
          <h3 className="venue-name">{common.venue}</h3>
          <div className="venue-gold-line" />
          <p className="venue-address">{common.venueAddress}</p>
          <p className="venue-desc">{common.venueDescription}</p>
          <a
            className="directions-btn"
            href={common.venueDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer">
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}