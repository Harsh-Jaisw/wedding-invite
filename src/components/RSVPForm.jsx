import { useState } from "react";
import "../styles/RSVPForm.css";

const SCRIPT_URL = import.meta.env.VITE_RSVP_SCRIPT_URL;
const SIDE = import.meta.env.VITE_SIDE || "bride";

export default function RSVPForm({ common }) {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    guests: "",
    attendance: "attending",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Google Apps Script requires no-cors from browser
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          side: SIDE,
          ...form,
        }),
      });

      setSubmitted(true);
    } catch (err) {
      console.error("RSVP submit failed:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="rsvp-section">
        <div className="rsvp-success">
          <div className="success-icon">♥</div>
          <h2 className="rsvp-heading">Thank You!</h2>
          <p className="rsvp-sub">
            We can't wait to celebrate with you.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="rsvp-section"  id="rsvp-section">
      <p className="section-eyebrow">You're Invited</p>
      <h2 className="rsvp-heading">Kindly RSVP</h2>
      <div className="gold-line" />

      <div className="rsvp-card">
        <span className="corner tl" />
        <span className="corner tr" />
        <span className="corner bl" />
        <span className="corner br" />

        <p className="rsvp-tagline">
          Your presence will make our celebration complete.
        </p>

        <form className="rsvp-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                maxLength={10}
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Guest Count</label>
              <input
                type="number"
                name="guests"
                placeholder="Guest Count"
                min="1"
                max="10"
                value={form.guests}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Attendance</label>
              <select
                name="attendance"
                value={form.attendance}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select</option>
                <option value="attending">Attending</option>
                <option value="not-attending">Not Attending</option>
                <option value="maybe">Maybe</option>
              </select>
            </div>
          </div>

          <div className="form-group full-width">
            <label>Message / Blessing</label>
            <textarea
              name="message"
              placeholder="Message / Blessing"
              rows="3"
              value={form.message}
              onChange={handleChange}
            />
          </div>

          {error && <p className="rsvp-error">{error}</p>}

          <button type="submit" className="rsvp-submit-btn" disabled={loading}>
            {loading ? "Sending..." : "Send RSVP"}
          </button>
        </form>
      </div>
    </section>
  );
}