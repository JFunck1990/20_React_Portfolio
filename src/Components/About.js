import React from "react";
import Footer from "./Footer"
import Nica from "./images/Nica.jpeg"
import "../styles/About.css"

function About(){
    return (
<div className="back">
<section  >
  <div className="row">
  <div className="col-md-12 art">

      <h2>About Me</h2>

      <div>
          <img className="img" src={Nica}></img>
      </div>
  </div>
  <div className="about col-md-12 text">
      <p>Hello! My name is John Funck, most call me Jack. I am hoping to get in with your team as an entry level  front-end or Full Stack  Web Developer. In May of 2021 I have earned a certificate in full stack development from the University of North Carolina, where I have obtained skills in JavaScript, HTML, CSS, React.js, Jquery, API Interaction (API, JSON, Ajax), Databases(MySQL and MongoDB), Server Side Development, and Quality Assurance.  In  December of 2013 I graduated from Western Carolina University with a BS degree in Entrepreneurship. Since graduating I worked for various companies where I have obtained skills in Customer Service, Leadership, and problem solving. I am excited to leverage my new skills and work with a great team!</p>
    </div>
    </div>

</section>
<Footer></Footer>
</div>
    )
}

export default About;