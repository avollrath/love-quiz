import Icon from "./Icon.jsx";

function Progress({ currentPattern, totalPatterns, answeredCount, totalQuestions }) {
  const percent = Math.round((answeredCount / totalQuestions) * 100);

  return (
    <section className="progress-panel" aria-label="Quiz progress">
      <div className="progress-meta">
        <span className="sticker small">Pattern {currentPattern} of {totalPatterns}</span>
        <span className="sticker small cyan">{answeredCount} of {totalQuestions}</span>
        <span className="heart-stack" aria-hidden="true">
          {Array.from({ length: totalPatterns }, (_, index) => (
            <Icon
              key={index}
              filled={index < currentPattern}
              className={index < currentPattern ? "heart filled" : "heart"}
            >
              favorite
            </Icon>
          ))}
        </span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${percent}%` }} />
      </div>
    </section>
  );
}

export default Progress;
