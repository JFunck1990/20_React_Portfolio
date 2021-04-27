//import logo from './logo.svg';
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import './App.css';
import PageContext from "./utils/PageContext"
import Home from "./Components/Home"

//import { BrowserRouter } from "react-router-dom";

function App() {
  const [pageState, setPageState] = useState({
    display: false,
    theme: "success",
    onClick: (theme, display) => {

      setPageState({ ...pageState, theme, display });
    }

  });
  return (
    <PageContext.Provider value={pageState}>
      <div>
      <Header></Header>
      <Home></Home>
    </div>
    </PageContext.Provider>
  );
}

export default App;
