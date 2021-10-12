import React from "react";
import "./scss/App.scss";
import Home from "./components/Home";
import Content from "./components/Content";

const App = () => {
  return (
    <div className="App">
      <Home />
      <Content />
      <div className="footer">Designed and developed by JENNY HUNG</div>
    </div>
  );
};

export default App;
