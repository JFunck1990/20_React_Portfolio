import React from "react";
import { Router, Switch, Route} from "react-router-dom";


import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

function Container() {
  return (
    <Router>
    <div>

          <section className="route-section">
            <Switch >
              <Route exact path="/" component={Home} />
              <Route path="/About" component={About} />
              <Route path="/Portfolio" component={Portfolio} />
              <Route path="/Resume" component={Resume} />
            </Switch>
          </section>


    </div>
    </Router>
  );
}

export default Container