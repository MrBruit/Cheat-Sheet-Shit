import { Link } from "react-router-dom";
import QuizEngine from "../componants/QuizEngine";
import { doomQuest } from "../data/DoomQuest";

export default function Doom() { 
    return ( 
        <div className="quiz-container"> 
            <Link to="/" className="back-button">Retour</Link> 
            <QuizEngine 
                title="DOOM Quiz" 
                questionsList={doomQuest} 
                total={doomQuest.length} 
                doomScoreKey="doomScore"
            /> 
        </div> 
    ); 
}