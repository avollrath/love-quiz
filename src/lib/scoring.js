export function getPatternScore(pattern, answers) {
  return pattern.statements.reduce((total, _statement, statementIndex) => {
    const answer = answers[`${pattern.id}-${statementIndex}`];
    return total + (Number.isInteger(answer) ? answer : 0);
  }, 0);
}

export function getScoreMeaning(score) {
  if (score <= 5) return "0–5: This pattern barely affects you.";
  if (score <= 9) return "6–9: You experience this pattern sometimes.";
  if (score <= 12)
    return "10–12: This pattern shows up regularly in your dating life.";
  return "13–15: This is a strong pattern for you right now.";
}

export function buildResults(patterns, answers) {
  const scores = patterns.map((pattern) => ({
    ...pattern,
    score: getPatternScore(pattern, answers),
  }));
  const highestScore = Math.max(...scores.map((pattern) => pattern.score));
  const winners = scores.filter((pattern) => pattern.score === highestScore);

  return {
    scores,
    winners,
    highestScore,
    scoreMeaning: getScoreMeaning(highestScore),
    hasTie: winners.length > 1,
  };
}
