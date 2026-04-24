import { scoringCopy } from "../data/quizData.js";
import Icon from "./Icon.jsx";

function Results({ results, onRestart }) {
  const topLabel = results.hasTie
    ? "High scoring patterns"
    : "Highest scoring pattern";

  return (
    <main className="results-screen">
      <header className="top-bar">
        <button className="brand-button" type="button" onClick={onRestart}>
          <Icon filled>favorite</Icon>
          <span>HEALTHY LOVE</span>
        </button>
        <button className="mini-button" type="button" onClick={onRestart}>
          <Icon>replay</Icon>
          Restart
        </button>
      </header>

      <section className="results-hero">
        <div className="sticker">ANALYSIS COMPLETE</div>
        <h1>{topLabel}</h1>
        <div className="winner-stack">
          {results.winners.map((winner) => (
            <article className="winner-card" key={winner.id}>
              <p>PATTERN {winner.number}</p>
              <h2>Pattern {winner.number} - {winner.resultName}</h2>
              <strong>{winner.score}/15</strong>
            </article>
          ))}
        </div>
        <p className="score-meaning">{results.scoreMeaning}</p>
      </section>

      <section className="score-section">
        <div className="score-copy">
          <p>{scoringCopy.heading}</p>
          <ul>
            {scoringCopy.meanings.map((meaning) => (
              <li key={meaning}>{meaning}</li>
            ))}
          </ul>
          {results.hasTie && <p>{scoringCopy.tieNote}</p>}
        </div>

        <div className="score-board" aria-label="All pattern scores">
          <h2>All pattern scores</h2>
          {results.scores.map((pattern) => (
            <div className="score-row" key={pattern.id}>
              <div>
                <span>Pattern {pattern.number}</span>
                <strong>{pattern.resultName}</strong>
              </div>
              <div className="score-bar" aria-hidden="true">
                <span style={{ width: `${(pattern.score / 15) * 100}%` }} />
              </div>
              <b>{pattern.score}/15</b>
            </div>
          ))}
        </div>
      </section>

      <section className="description-section">
        {results.winners.map((winner) => (
          <article className="description-card" key={winner.id}>
            <div className="description-badge">PATTERN {winner.number}</div>
            <h2>Pattern {winner.number} - {winner.resultName}</h2>
            <p>{winner.description}</p>
          </article>
        ))}
      </section>

      <div className="final-actions">
        <button className="primary-button" type="button" onClick={onRestart}>
          <Icon>replay</Icon>
          RESTART QUIZ
        </button>
      </div>
    </main>
  );
}

export default Results;
