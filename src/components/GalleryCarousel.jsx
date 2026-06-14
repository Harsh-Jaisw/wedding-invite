import { useState } from "react";
import "../styles/GalleryCarousel.css";

export default function GalleryCarousel({ common }) {
  const images = common.gallery;
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  // Desktop: show 3 centered around current
  const getVisible = () => {
    const total = images.length;
    return [
      images[(current - 1 + total) % total],
      images[current],
      images[(current + 1) % total],
    ];
  };

  return (
    <section className="gallery-section">
      <p className="gallery-eyebrow">Captured Moments</p>
      <h2 className="gallery-heading">Moments of Love</h2>
      <div className="gold-line" />

      <div className="carousel-wrapper">
        <button className="carousel-btn prev-btn" onClick={prev}>&#8249;</button>

        {/* Mobile: single image */}
        <div className="carousel-mobile">
          <img
            key={current}
            src={images[current]}
            alt={`Gallery ${current + 1}`}
            className="carousel-img-single"
          />
        </div>

        {/* Desktop: 3 images */}
        <div className="carousel-desktop">
          {getVisible().map((src, i) => (
            <div
              className={`carousel-img-wrap ${i === 1 ? "active" : "side"}`}
              key={i}
            >
              <img src={src} alt={`Gallery ${i}`} />
            </div>
          ))}
        </div>

        <button className="carousel-btn next-btn" onClick={next}>&#8250;</button>
      </div>

      {/* Dots */}
      <div className="carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  );
}