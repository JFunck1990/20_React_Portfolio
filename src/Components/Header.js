import React from "react";
import {Link} from "react-router-dom";
import "../styles/Header.css"

function Header() {
  return (
//     <nav class="nav content-center navbar-expand-lg navbar-dark bg-dark">
//   <a class="navbar-brand" href="#">Jack Funck</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <div class="justify-content-center collapse navbar-collapse" id="navbarNavAltMarkup">
//     <div class="navbar-nav">
//       <a className="nav-item nav-link active" to="/"><link>Home</link><span class="sr-only">(current)</span></a>
//       <a className="nav-item nav-link" to="About">About</a>
//       <a className="nav-item nav-link" to="Portfolio">Portfolio</a>
//       <a className="nav-item nav-link" to="Resume">Resume</a>
//       <a className="nav-item nav-link" to="Contact">Contact</a>
//     </div>
//   </div>
// </nav>
<div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/Resume">Resume</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
</div>
  )
}

export default Header;
