import { useEffect, useState } from "react";
import Question from "./Question";
import Answers from "./Answers";
import "../assets/styles/Quiz.css";
import type { QuestionAnswers } from "../types/type";

type QuizEngineProps = {
  title: string;
  questionsList: QuestionAnswers[];
  total: number;
  saveScoreKey?: string;
  doomScoreKey?: string;
};

export default function QuizEngine({ title, questionsList, total, saveScoreKey, doomScoreKey }: QuizEngineProps) {
  const [questions, setQuestions] = useState<QuestionAnswers[]>(questionsList);
  const [currentQuest, setCurrentQuest] = useState<QuestionAnswers | null>(null);
  const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

  function pickRandomQuestion(list: QuestionAnswers[]) {
    return list[Math.floor(Math.random() * list.length)];
  }

  useEffect(() => {
    if (questions.length > 0) {
      setCurrentQuest(pickRandomQuestion(questions));
    }
  }, [questions]);

  useEffect(() => {
    if (currentQuest) {
      const mix = [currentQuest.correct, ...currentQuest.wrong].sort(
        () => Math.random() - 0.5
      );
      setShuffledAnswers(mix);
    }
  }, [currentQuest]);

  if (!currentQuest || shuffledAnswers.length === 0) return null;

  function handleAnswerClick(answer: string) {
    if (!currentQuest || selectedAnswer !== null) return;

    const quest = currentQuest;
    const correct = answer === quest.correct;

    setSelectedAnswer(answer);
    setIsCorrectAnswer(correct);

    if (correct) setScore((s) => s + 1);

    setTimeout(() => {
      setQuestions((prev) => prev.filter((q) => q.id !== quest.id));
      setSelectedAnswer(null);
      setIsCorrectAnswer(null);
    }, 800);
  }

  if (questions.length === 0) {
    if (saveScoreKey) {
      const stored = JSON.parse(localStorage.getItem("scores") || "{}");
      const previous = stored[saveScoreKey];

      if (previous === undefined || score > previous) {
        stored[saveScoreKey] = score;
        localStorage.setItem("scores", JSON.stringify(stored));
      }
    }if (questions.length === 0) {
  if (saveScoreKey) {
    const stored = JSON.parse(localStorage.getItem("scores") || "{}");
    const previous = stored[saveScoreKey];

    if (previous === undefined || score > previous) {
      stored[saveScoreKey] = score;
      localStorage.setItem("scores", JSON.stringify(stored));
    }
  }

  if (doomScoreKey) {
    const previous = Number(localStorage.getItem("doomScore") || "0");
    if (score > previous) {
      localStorage.setItem("doomScore", String(score));
    }
  }

  return (
    <div className="quiz-container">
      <h1>{title}</h1>
      <h2>Score final : {score}/{total}</h2>
    </div>
  );
}


    return (
      <div className="quiz-container">
        <h1>{title}</h1>
        <h2>Score final : {score}/{total}</h2>
      </div>
    );
  }

  const progress = ((total - questions.length) / total) * 100;

  return (
    <div className="quiz-container">
      <h1>{title}</h1>

      <div className="progress">
        <div className="bar" style={{ width: `${progress}%` }} />
      </div>

      <h2>Score : {score}/{total}</h2>

      <Question question={currentQuest.definition} />

      <Answers
        answers={shuffledAnswers}
        onAnswerClick={handleAnswerClick}
        selectedAnswer={selectedAnswer}
        isCorrectAnswer={isCorrectAnswer}
        correctAnswer={currentQuest.correct}
      />
    </div>
  );
}
