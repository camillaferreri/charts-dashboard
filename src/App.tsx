import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import './i18n';

import Header from "./components/Header/Header";
import Home from "./pages/Home";

import './App.scss';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
        <Router>
          <Header user={{}} onLogin={() => {}} onLogout={() => {}} onCreateAccount={() => {}} />
          
          <Routes>
            <Route path="/about">
              <></>
            </Route>
            <Route path="/" element={<Home />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
