import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import AdvancedAnalysis from "./pages/AdvancedAnalysis/AdvancedAnalysis";

import './App.scss';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          
          <Routes>
            <Route path="/analisi-avanzata" element={<AdvancedAnalysis />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
