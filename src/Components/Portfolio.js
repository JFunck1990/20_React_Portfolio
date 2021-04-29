import React from "react";
import passgen from "./images/passGen.png"
import Codequiz from "./images/Codequiz.png"
import wds from "./images/wds.png"
import Weather from "./images/weather.png"
import Tlh from "./images/tlh.png"
import Burger from "./images/burger.png"
import Notes from "./images/notes.png"

//mport Footer from "./Footer"


function Portfolio() {
  return (

    <div className="row">
      <div className="col-md-4 card" style={{width: "18rem"}}>
        <img
          className="card-img-top"
          src={Codequiz}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">Code Quiz</h5>
          <p className="card-text">
          This quiz asks the user a series of questions about web development and times how long it takes to answer them all. The user is given 165 seconds to start out with, and each wrong answer results in a 15-second penalty. The user's final score is equal to the number of seconds left on the clock after the final question is answered.

          To start the quiz, the user clicks the "Start Quiz" button on the landing page.
          </p>
          <a href="https://jfunck1990.github.io/HW-4--Web-APIs-Code-Quiz/" target="blank" className="btn btn-primary">
            Deploy
          </a>
          <a href="https://github.com/JFunck1990/HW-4--Web-APIs-Code-Quiz" target="blank" className="btn btn-primary">
            Repository
          </a>
        </div>
      </div>

      <div className="col-md-4 card" style={{width: "18rem"}}>
        <img
          className="card-img-top"
          src={passgen}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">Password Generator</h5>
          <p className="card-text">
          This site will generate letters, numbers , and special characters from 8 to 128 characters. when you go in and check the desired characters that I inputted (uppercase, lowercase, numbers, and special characters) you will be prompted to put in a number between 8 and 128 for desired length. When your desired length is in, then you hit ok and your random password will be generated.
          </p>
          <a href="https://jfunck1990.github.io/HW-3-JS-PasswordGen/"  target="blank"className="btn btn-primary">
            Deploy
          </a>
          <a href="https://github.com/JFunck1990/Jack-s-Team-Profile-Generator-" target="blank" className="btn btn-primary">
            Repository
          </a>
        </div>
      </div>

      <div className="col-md-4 card" style={{width: "18rem"}}>
        <img
          className="card-img-top"
          src={wds}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">Work Day Scheduler</h5>
          <p className="card-text">
          Each hour is color coded red "past", Pastel Red "present", and Pastel Green "future". Type in a reminder and hit save and it will be locally saved.
          </p>
          <a href="https://jfunck1990.github.io/HW-5-Third-Party-APIs-Work-Day-Scheduler/" target="blank" className="btn btn-primary">
            Deploy
          </a>
          <a href="https://github.com/JFunck1990/HW-5-Third-Party-APIs-Work-Day-Scheduler" target="blank" className="btn btn-primary">
            Repository
          </a>
        </div>
      </div>

      <div className="col-md-4 card" style={{width: "18rem"}}>
        <img
          className="card-img-top"
          src={Weather}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">Weather Dashboard</h5>
          <p className="card-text">
            Utilizing Jquery and openWeather api to build a current and five day forcast of your city/town of your choosing.
          </p>
          <a href="https://jfunck1990.github.io/Jack-s-Weather-Dashboard/" target="blank" className="btn btn-primary">
            Deploy
          </a>
          <a href="https://github.com/JFunck1990/Jack-s-Weather-Dashboard" target="blank" className="btn btn-primary">
            Repository
          </a>
        </div>
      </div>
      <div className="col-md-4 card" style={{width: "18rem"}}>
        <img
          className="card-img-top"
          src={Tlh}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">The Location Hub</h5>
          <p className="card-text">
         This is a group project using Jquery, Open Weather Api, Zomato Api, and Covidtracking Api to get local weather,States Covid update, and 3 local restraunts
          </p>
          <a href="https://zsmith4331.github.io/project1-team4/" target="blank" className="btn btn-primary">
            Deploy
          </a>
          <a href="https://github.com/zsmith4331/project1-team4" target="blank" className="btn btn-primary">
            Repository
          </a>
        </div>
      </div>
      <div className="col-md-4 card" style={{width: "18rem"}}>
        <img
          className="card-img-top"
          src={Burger}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">Burger Log</h5>
          <p className="card-text">
          Using NodeJs, Handlebars, and Mysql to build a restraunt app which let users input names of burgers that they like, devour the burgers, reorder the burger, or delete the burger.
          </p>
          <a href="https://the-burger-logger.herokuapp.com/" target="blank" className="btn btn-primary">
            Deploy
          </a>
          <a href="https://github.com/JFunck1990/The-Burger-Log" target="blank" className="btn btn-primary">
            Repository
          </a>
        </div>
      </div>
      <div className="col-md-4 card" style={{width: "18rem"}}>
        <img
          className="card-img-top"
          src={Notes}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">The Note Taker</h5>
          <p className="card-text">
          This simple note taking application that allows you to save notes with a title and plain text. Powered by ExpressJS, the Note Taker app makes creating, viewing, and deleting notes effortless!
          </p>
          <a href="https://agile-waters-80427.herokuapp.com/" target="blank" className="btn btn-primary">
            Deploy
          </a>
          <a href="https://github.com/JFunck1990/The-Note-Taker" target="blank" className="btn btn-primary">
            Repository
          </a>
        </div>
      </div>

    </div>
  );
}

export default Portfolio;
