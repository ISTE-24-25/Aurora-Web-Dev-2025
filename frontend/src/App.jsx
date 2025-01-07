import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Hackathon from "./pages/hackathon";
import Workshop from "./pages/Workshop";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Hackathon />} />
          <Route path="/please" element={<Workshop />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
