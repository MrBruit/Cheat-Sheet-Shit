import { Link, useParams } from "react-router-dom"
import { javascriptQuiz } from "../data/Javascript";
import { reactQuiz } from "../data/React";
import { htmlCssQuiz } from "../data/HtmlCss";
import { sqlQuiz } from "../data/Sql";
import { acronymsQuiz } from "../data/Acronymes";
import Question from "../componants/Question";
import Answers from "../componants/Answers";
import { useEffect, useState } from "react";
import type { QuestionAnswers } from "../types/type";
import { fullCategoryQuiz } from "../data/Full";
import "../assets/styles/Quiz.css"


export default function Quiz() {
  const { category } = useParams();

  const [score, setScore] = useState(0);
  const [lastScore, setLastScore] = useState<number | null>(null);
  const [currentQuest, setCurrentQuest] = useState<QuestionAnswers>();
  
  const categories = {
    javascript: javascriptQuiz,
    react: reactQuiz,
    htmlcss: htmlCssQuiz,
    sql: sqlQuiz,
    acronymes: acronymsQuiz,
    fullpack: fullCategoryQuiz
  };
  
  const quiz = categories[category as keyof typeof categories];
  const [questions, setQuestions] = useState<QuestionAnswers[]>(quiz);
  
  if (!quiz) return <h2>Catégorie inconnue</h2>;
  

  function pickRandomQuestion(list: QuestionAnswers[]) {
    return list[Math.floor(Math.random() * list.length)];
  }

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("scores") || "{}");
    if (stored[category!]) {
      setLastScore(stored[category!]);
    }
  }, [category]);

  useEffect(() => {
    if (questions.length > 0) {
      const random = pickRandomQuestion(questions);
      setCurrentQuest(random);
    }
  }, [questions]);

if (questions.length === 0) {

  const stored = JSON.parse(localStorage.getItem("scores") || "{}");

  const previous = stored[category!];

  if (previous === undefined || score > previous) {
    stored[category!] = score;
    localStorage.setItem("scores", JSON.stringify(stored));
  }

  return (
    <div className="quiz-container">
      <h1>Quiz terminé !</h1>
      <h2>Score final : {score}/40</h2>
      <Link to="/" className="back-button">← Retour</Link>
    </div>
  );
}


  if (!currentQuest) return null;

  const shuffledAnswers = [currentQuest.correct, ...currentQuest.wrong]
    .sort(() => Math.random() - 0.5);

  function handleAnswerClick(answer: string) {
    if (!currentQuest) return;

    const isCorrect = answer === currentQuest.correct;

    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    const remaining = questions.filter(q => q.id !== currentQuest.id);
    setQuestions(remaining);
  }

  
  const progress = ((40 - questions.length) / 40) * 100;

  return (
    <div className="quiz-container">
       <Link to="/" className="back-button">← Retour</Link>
      <h1>Quiz : {category}</h1>

      <div className="progress">
  <div className="bar" style={{ width: `${progress}%` }} />
</div>


      <h2>Score : {score}/40</h2>

      {lastScore !== null && (
        <h3>Dernier score ({category}) : {lastScore}/40</h3>
      )}

      <Question question={currentQuest.definition} />
      <Answers answers={shuffledAnswers} onAnswerClick={handleAnswerClick} />
    </div>
  );
}
