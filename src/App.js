import React from "react";
import "./scss/App.scss";
import Home from "./Home";
import Header from "./Header";
import Content from "./Content";

const App = () => {
  return (
    <div className="App">
      <Home />
      <Header />
      <Content />
      <div className="footer">Designed and developed by JENNY HUNG</div>
    </div>
  );
};

export default App;
