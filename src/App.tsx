import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './i18n';

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

import './App.scss';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          
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
