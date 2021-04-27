//import logo from './logo.svg';
import React, { useState } from "react";
import Header from "./Components/Header";
import './App.css';
import PageContext from "./utils/PageContext"
import Home from "./Components/Home"
import Footer from "./Components/Footer"
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
      <Footer></Footer>
    </div>
    </PageContext.Provider>
  );
}

export default App;
