import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Game from "./pages/Game";

import './styles/globals.scss';

function App() {
  return (
    <div className="App">
      <Router>        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:slug" element={<Game />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
