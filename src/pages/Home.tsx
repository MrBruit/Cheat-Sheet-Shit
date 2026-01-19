import { Link } from "react-router-dom"
import "../assets/styles/Home.css"

export default function Home() {
  return (
    <div className="home-container">
      <h1>CHEAT SHEET SHIT</h1>

      <h2>Choisis un quiz :</h2>
      <ul>
        <li><Link to="/quiz/react">Quiz React</Link></li>
        <li><Link to="/quiz/javascript">Quiz JavaScript</Link></li>
        <li><Link to="/quiz/sql">Quiz MySQL</Link></li>
        <li><Link to="/quiz/acronymes">Quiz Acronyme</Link></li>
        <li><Link to="/quiz/htmlcss">Quiz HTML/CSS</Link></li>
        <li><Link to="/quiz/fullpack">Quiz FULL PACK</Link></li>
      </ul>

      <h2>Meilleurs scores</h2>
      <Link to="/scores">Voir les scores</Link>
    </div>
  )
}
