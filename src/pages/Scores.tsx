import { useEffect, useState } from "react";
import "../assets/styles/Scores.css"
import { Link } from "react-router-dom";

export default function Scores() {
  const [scores, setScores] = useState<Record<string, number>>({});
  const [average, setAverage] = useState<number | null>(null);

  useEffect(() => {
  const stored: Record<string, number> = JSON.parse(localStorage.getItem("scores") || "{}");
  setScores(stored);

  const values = Object.values(stored).filter(v => typeof v === "number" && !isNaN(v));

  if (values.length > 0) {
    const avg = values.reduce((a, b) => a + b, 0) / values.length;
    setAverage(avg);
  }
}, []);
   
function resetScores() {
  localStorage.removeItem("scores");
  setScores({});
  setAverage(null);
}

  return (
    <div  className="quiz-container">
      <Link to="/" className="back-button">← Retour</Link>
      <h1>Meilleurs scores</h1>

      <ul>
        {Object.entries(scores).map(([category, score]) => (
          <li key={category}>
            <strong>{category}</strong> : {score}/40
          </li>
        ))}
      </ul>

      {average !== null && (
        <h2>Moyenne générale : {average.toFixed(2)}/40</h2>
      )}
      <button className="reset-button" onClick={resetScores}> Réinitialiser les scores </button>
    </div>
  );
}
