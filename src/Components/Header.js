import React from "react";
import {Link} from "react-router-dom";
import "../styles/Header.css"

function Header() {
  return (
//     <nav className="nav content-center navbar-expand-lg navbar-dark bg-dark">
//   <Link className="navbar-brand" href="#">Jack Funck</Link>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="justify-content-center collapse navbar-collapse" id="navbarNavAltMarkup">
//     <div className="navbar-nav">
//       <Link className="nav-item nav-link active" to="/20_React_Portfolio"><link>Home</link><span class="sr-only">(current)</span></Link>
//       <Link className="nav-item nav-link" to="About">About</Link>
//       <Link className="nav-item nav-link" to="Portfolio">Portfolio</Link>
//       <Link className="nav-item nav-link" to="Resume">Resume</Link>
//       <Link className="nav-item nav-link" to="Contact">Contact</Link>
//     </div>
//   </div>
// </nav>
 <div>
        <nav className="nav content-center navbar-expand-lg navbar-dark bg-dark" >
          <ul>
            <li>
              <Link to="/20_React_Portfolio">Home</Link>
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
            {/* <li>
              <Link to="/Contact">Contact</Link>
            </li> */}
          </ul>
        </nav>
</div>
  )
}

export default Header;
