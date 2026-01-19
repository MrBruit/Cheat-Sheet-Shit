type Question = {
  question: string | undefined;
};

export default function Question ({question}: Question) {
    return (
        <>
        <p className="quiz-question">{question}</p>
        </>
    )
}