import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "../MainRouter";
import Contact from "../src/components/Contact";

const App = () => {
  return (
      <Router>

          <MainRouter />
      
      </Router>
      
  );
};

export default App;
