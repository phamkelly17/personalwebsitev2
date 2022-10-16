import { React, useEffect, useState } from "react";
import "./Home.css";
import email from "../images/email.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import tribalscale from "../images/experiences/tribalscale.png";
import About from "./About/About";
import HorizontalScroll from "./HorizontalScroll/HorizontalScroll";

const Home = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  function handleResize() {
    document.getElementById("firstPage").style.height = window.innerHeight
      .toString()
      .concat("px");
    document.getElementById("secondPage").style.minHeight = window.innerHeight
      .toString()
      .concat("px");
    document.getElementById("menuContainer").style.minHeight = (
      window.innerHeight - 50
    )
      .toString()
      .concat("px");
  }

  useEffect(() => {
    console.log(window.innerWidth.toString().concat("px"));
    document.getElementById("firstPage").style.height = window.innerHeight
      .toString()
      .concat("px");
    document.getElementById("secondPage").style.minHeight = window.innerHeight
      .toString()
      .concat("px");
    document.getElementById("menuContainer").style.minHeight = (
      window.innerHeight - 50
    )
      .toString()
      .concat("px");
  });

  window.addEventListener("resize", handleResize);

  return (
    <div id="homeContainer">
      <div id="firstPage">
        <p>hello this is the first page</p>
      </div>
      <div id="secondPage">
        <div id="menuContainer">
          <div id="about" className="optionContainer">
            <h1
              className="menuTab"
              onClick={() => {
                setShowAbout(!showAbout);
                document.getElementById("secondPage").style.height =
                  window.innerHeight + 500;
              }}
            >
              ABOUT
            </h1>
            {showAbout && <About></About>}
          </div>
          <div className="optionContainer">
            <h1
              className="menuTab"
              onClick={() => {
                setShowExperience(!showExperience);
                // document.getElementsByClassName(
                //   "horizontalScrollContainer"
                // ).style.width = window.innerWidth.toString().concat("px");
              }}
            >
              EXPERIENCE
            </h1>
            {showExperience && (
              <HorizontalScroll image={tribalscale}></HorizontalScroll>
            )}
          </div>
          <div className="optionContainer">
            <h1
              className="menuTab"
              onClick={() => {
                setShowProjects(!showProjects);
                // document.getElementsByClassName(
                //   "horizontalScrollContainer"
                // ).style.width = window.innerWidth.toString().concat("px");
              }}
            >
              PROJECTS
            </h1>
            {showProjects && <HorizontalScroll></HorizontalScroll>}
          </div>
          <div className="optionContainer">
            <h1 className="menuTab">RESUME</h1>
          </div>
          <div id="nav-icons">
            <div className="imgContainer">
              <a href="mailto:k27pham@uwaterloo.ca">
                <img className="nav-imgs" src={email} alt="email" />
              </a>
            </div>
            <div className="imgContainer">
              <a href="https://github.com/phamkelly17" target="_blank">
                <img className="nav-imgs" src={github} alt="github" />
              </a>
            </div>
            <div className="imgContainer">
              <a href="https://www.linkedin.com/in/kellypham16" target="_blank">
                <img className="nav-imgs" src={linkedin} alt="linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div id="bottomBar">
          <p>Designed by Kelly Pham 2022 :)</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
