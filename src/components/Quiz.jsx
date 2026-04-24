import { useState } from "react";
import { answerOptions, patterns } from "../data/quizData.js";
import AnswerButton from "./AnswerButton.jsx";
import Icon from "./Icon.jsx";
import Progress from "./Progress.jsx";

function Quiz({ answers, onAnswer, onBack, onComplete, totalQuestions }) {
  const [currentPatternIndex, setCurrentPatternIndex] = useState(0);
  const currentPattern = patterns[currentPatternIndex];
  const answeredCount = Object.keys(answers).length;
  const isLastPattern = currentPatternIndex === patterns.length - 1;
  const isPatternComplete = currentPattern.statements.every(
    (_statement, statementIndex) =>
      answers[`${currentPattern.id}-${statementIndex}`] !== undefined,
  );

  function goNext() {
    if (!isPatternComplete) return;
    if (isLastPattern) {
      onComplete();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setCurrentPatternIndex((index) => index + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goPrevious() {
    if (currentPatternIndex === 0) {
      onBack();
      return;
    }
    setCurrentPatternIndex((index) => index - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="quiz-screen">
      <header className="top-bar">
        <button className="brand-button" type="button" onClick={onBack}>
          <Icon filled>favorite</Icon>
          <span>HEALTHY LOVE</span>
        </button>
        <button className="mini-button" type="button" onClick={goPrevious}>
          <Icon>arrow_back</Icon>
          Back
        </button>
      </header>

      <Progress
        currentPattern={currentPattern.number}
        totalPatterns={patterns.length}
        answeredCount={answeredCount}
        totalQuestions={totalQuestions}
      />

      <section className="quiz-card">
        <div className="quiz-card-sticker">
          <Icon filled>auto_awesome</Icon>
        </div>
        <p className="pattern-kicker">PATTERN {currentPattern.number}</p>

        <div className="statement-list">
          {currentPattern.statements.map((statement, statementIndex) => {
            const answerKey = `${currentPattern.id}-${statementIndex}`;
            return (
              <article className="statement-card" key={answerKey}>
                <p className="statement-text">
                  <span>{statementIndex + 1}</span>
                  {statement}
                </p>
                <div className="answer-grid">
                  {answerOptions.map((option) => (
                    <AnswerButton
                      key={option.value}
                      option={option}
                      selected={answers[answerKey] === option.value}
                      onClick={() =>
                        onAnswer(currentPattern.id, statementIndex, option.value)
                      }
                    />
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <nav className="quiz-actions" aria-label="Quiz navigation">
        <button className="secondary-button" type="button" onClick={goPrevious}>
          <Icon>arrow_back</Icon>
          Back
        </button>
        <button
          className="primary-button"
          type="button"
          onClick={goNext}
          disabled={!isPatternComplete}
        >
          {isLastPattern ? "SEE RESULTS" : "NEXT PATTERN"}
          <Icon>arrow_forward</Icon>
        </button>
      </nav>
    </main>
  );
}

export default Quiz;
