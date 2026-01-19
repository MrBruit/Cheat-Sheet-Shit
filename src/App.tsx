import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.tsx"
import Quiz from "./pages/Quiz.tsx"
import Scores from "./pages/Scores.tsx"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz/:category" element={<Quiz />} />
      <Route path="/scores" element={<Scores />} />
    </Routes>
  )
}

export default App
