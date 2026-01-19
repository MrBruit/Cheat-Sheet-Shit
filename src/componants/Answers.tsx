type AnswersProps = {
  answers: string[];
  onAnswerClick: (answer: string) => void;
};

export default function Answers({ answers, onAnswerClick }: AnswersProps) {
  return (
    <div className="quiz-answers">
      {answers.map((ans) => (
        <button key={ans} onClick={() => onAnswerClick(ans)}>
          {ans}
        </button>
      ))}
    </div>
  );
}
