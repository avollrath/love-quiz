import { landingCopy } from "../data/quizData.js";
import Icon from "./Icon.jsx";

function Landing({ onStart }) {
  return (
    <main className="landing-screen">
      <div className="marquee" aria-hidden="true">
        <div>
          FIND YOUR LOVE PATTERN • REAL LOVE ONLY • START THE QUIZ • FIND YOUR LOVE PATTERN • REAL LOVE ONLY • START THE QUIZ •
        </div>
      </div>

      <section className="hero-grid">
        <div className="hero-copy">
          <div className="sticker">EXCLUSIVE FEATURE</div>
          <h1>{landingCopy.title}</h1>
          <p className="subtitle">{landingCopy.subtitle}</p>
          <p className="instructions">{landingCopy.instructions}</p>
          <button className="primary-button" type="button" onClick={onStart}>
            <Icon filled>favorite</Icon>
            START QUIZ
          </button>
        </div>

        <div className="cover-art" aria-hidden="true">
          <div className="mascot-card">
            <img
              alt=""
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnSr1MpMB1fy9DH6XTmooX2WiTke4waugHvAMgzBRiji7mlne1YxPjhUPmOvgYp5wzO5GG8UW916rbj9OND0ffMX--X6dmr6MZncqFHYd6v7LXlv9EwtlB1k9UPltqImJY19pvwtJV2BT6ESXgSNMoHVr4JaMxmb3t--YTmzsSjQU_6bv5_mg3riKuDuHkH02brvxlV1ldv-ksUBIfBESGl6nITPGX-jI6Yb8ZYlIhZC0wFnLOgHM3m6rTrrJ02yDvA1OFf5sKAmQ"
            />
            <span className="floating-sticker top">THE ICK?</span>
            <span className="floating-sticker left">THE FANTASY?</span>
            <span className="floating-sticker bottom">THE PULLBACK?</span>
          </div>
          <div className="sparkle sparkle-one">
            <Icon filled>auto_awesome</Icon>
          </div>
          <div className="sparkle sparkle-two">
            <Icon filled>stars</Icon>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Landing;
