type AnswersProps = {
  answers: string[];
  onAnswerClick: (answer: string) => void;

  // Ajouts nécessaires
  selectedAnswer: string | null;
  isCorrectAnswer: boolean | null;
  correctAnswer: string;
};

export default function Answers({
  answers,
  onAnswerClick,
  selectedAnswer,
  isCorrectAnswer,
  correctAnswer
}: AnswersProps) {
  return (
    <div className="quiz-answers">
      {answers.map((ans) => {
        // Détermine la classe CSS du bouton
        let className = "answer";

        if (selectedAnswer === ans) {
          className += isCorrectAnswer ? " correct" : " wrong";
        }

        // Optionnel : colorer aussi la bonne réponse après un mauvais choix
        if (selectedAnswer && ans === correctAnswer && !isCorrectAnswer) {
          className += " correct";
        }

        return (
          <button
            key={ans}
            onClick={() => onAnswerClick(ans)}
            className={className}
            disabled={selectedAnswer !== null} // empêche le spam
          >
            {ans}
          </button>
        );
      })}
    </div>
  );
}
