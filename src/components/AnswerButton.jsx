function AnswerButton({ option, selected, onClick }) {
  return (
    <button
      className={`answer-button answer-${option.value} ${selected ? "is-selected" : ""}`}
      type="button"
      onClick={onClick}
      aria-pressed={selected}
    >
      <span className="answer-number">{option.value}</span>
      <span className="answer-label">{option.label}</span>
    </button>
  );
}

export default AnswerButton;
