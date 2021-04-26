import React from "react";

function Header() {
  return (
    <nav class="nav content-center navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Jack Funck</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="justify-content-center collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Portfolio</a>
      <a class="nav-item nav-link" href="#">Resume</a>
      <a class="nav-item nav-link" href="#">Contact</a>
    </div>
  </div>
</nav>
  )
}

export default Header;
