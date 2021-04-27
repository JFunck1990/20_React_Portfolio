import React from "react";
//import styled from "styled-components";
import { Switch, Route} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

function Container({ location }) {
  return (
    <div>


          <section className="route-section">
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/About" component={About} />
              <Route path="/Portfolio" component={Portfolio} />
              <Route path="/Resume" component={Resume} />
            </Switch>
          </section>

    
    </div>
  );
}

export default Container