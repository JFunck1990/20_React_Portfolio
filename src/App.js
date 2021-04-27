//import logo from './logo.svg';
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./Components/Header";
import './App.css';
import PageContext from "./utils/PageContext"
 import Home from "./Components/Home"
import About from "./Components/About"
import Portfolio from "./Components/Portfolio"
 import Resume from "./Components/Resume"
import Wrapper from "./Components/Wapper"
import Contact from "./Components/Contact"
import Hwdata from "./data/Hwdata"

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
      <Router>
      <div>
        <Header/>
        <Wrapper>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Portfolio" component={Portfolio}/>
        <Route exact path="/Resume" component={Resume} />
        <Route exact path="/Contact" component={Contact} />
        </Switch>

        </Wrapper>

      </div>
      </Router>
    </PageContext.Provider>
  );
}

export default App;
