import WelcomeScreen from './Pages/WelcomeSceen'
import Home from './Pages/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
