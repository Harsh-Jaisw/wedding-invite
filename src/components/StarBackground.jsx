import { useEffect, useRef } from "react";
import "../styles/StarBackground.css";

export default function StarBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const count = 120;

    for (let i = 0; i < count; i++) {
      const star = document.createElement("span");
      star.classList.add("star");

      // Random position
      star.style.top  = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;

      // Random size: tiny, small, medium
      const size = Math.random();
      if (size < 0.6)       star.classList.add("star-sm");
      else if (size < 0.85) star.classList.add("star-md");
      else                  star.classList.add("star-lg");

      // Random blink delay and duration
      star.style.animationDelay    = `${(Math.random() * 5).toFixed(2)}s`;
      star.style.animationDuration = `${(1.5 + Math.random() * 3).toFixed(2)}s`;

      container.appendChild(star);
    }

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return <div className="star-container" ref={containerRef} />;
}