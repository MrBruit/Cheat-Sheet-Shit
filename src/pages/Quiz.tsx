import QuizEngine from "../componants/QuizEngine";
import { javascriptQuiz } from "../data/Javascript";
import { reactQuiz } from "../data/React"
import { htmlCssQuiz } from "../data/HtmlCss"
import {sqlQuiz } from "../data/Sql"
import {acronymsQuiz } from "../data/Acronymes"
import { fullCategoryQuiz } from "../data/Full"
import { Link, useParams } from "react-router-dom";
import type { Category } from "../types/type";

export default function Quiz() {
   const { category } = useParams<{ category: Category }>(); 
   
   if (!category) return null;

  const categories = {
    javascript: javascriptQuiz,
    react: reactQuiz,
    htmlcss: htmlCssQuiz,
    sql: sqlQuiz,
    acronymes: acronymsQuiz,
    fullpack: fullCategoryQuiz
  };

  const quiz = categories[category];

  return ( 
    <div className="quiz-container"> 
    <Link to="/" className="back-button">Retour</Link>
    <QuizEngine
      title={`Quiz : ${category}`}
      questionsList={quiz}
      total={40}
      saveScoreKey={category}
    />
    </div>
  );
}
