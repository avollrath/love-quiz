import { landingCopy } from "../data/quizData.js";
import heroImage from "../images/hero.jpg";
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
              src={heroImage}
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
