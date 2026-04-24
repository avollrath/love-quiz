import { useMemo, useState } from "react";
import Landing from "./components/Landing.jsx";
import Quiz from "./components/Quiz.jsx";
import Results from "./components/Results.jsx";
import { patterns } from "./data/quizData.js";
import { buildResults } from "./lib/scoring.js";

const TOTAL_QUESTIONS = patterns.reduce(
  (count, pattern) => count + pattern.statements.length,
  0,
);

function App() {
  const [screen, setScreen] = useState("landing");
  const [answers, setAnswers] = useState({});

  const results = useMemo(() => buildResults(patterns, answers), [answers]);

  function startQuiz() {
    setAnswers({});
    setScreen("quiz");
  }

  function restartQuiz() {
    setAnswers({});
    setScreen("landing");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function saveAnswer(patternId, statementIndex, value) {
    setAnswers((current) => ({
      ...current,
      [`${patternId}-${statementIndex}`]: value,
    }));
  }

  return (
    <div className="app-shell">
      {screen === "landing" && <Landing onStart={startQuiz} />}
      {screen === "quiz" && (
        <Quiz
          answers={answers}
          onAnswer={saveAnswer}
          onBack={() => setScreen("landing")}
          onComplete={() => setScreen("results")}
          totalQuestions={TOTAL_QUESTIONS}
        />
      )}
      {screen === "results" && (
        <Results results={results} onRestart={restartQuiz} />
      )}
    </div>
  );
}

export default App;
