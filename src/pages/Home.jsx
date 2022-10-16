import { React, useEffect } from "react";
import "./Home.css";
import email from '../images/email.png'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'

const Home = () => {

  function handleResize() {
    document.getElementById("firstPage").style.height = window.innerHeight
      .toString()
      .concat("px");
    document.getElementById("menuItemsContainer").style.minHeight =
      window.innerHeight.toString().concat("px");
  }

  useEffect(() => {
    console.log(window.innerHeight.toString().concat("px"));
    document.getElementById("firstPage").style.height = window.innerHeight
      .toString()
      .concat("px");
    document.getElementById("secondPage").style.minHeight =
      window.innerHeight.toString().concat("px");
  });

  window.addEventListener("resize", handleResize);

  return (
    <div id="homeContainer">
      <div id="firstPage">
        <p>hello this is the first page</p>
      </div>
      <div id="secondPage">
        <div>
          <h1 className="menuTab">ABOUT</h1>
        </div>
        <div>
          <h1 className="menuTab">EXPERIENCE</h1>
        </div>
        <div>
          <h1 className="menuTab">PROJECTS</h1>
        </div>
        <div>
          <h1 className="menuTab">RESUME</h1>
        </div>
        <br></br>

        <div id = 'nav-icons'>
            <div className="imgContainer">
                <a href = "mailto:k27pham@uwaterloo.ca">
                    <img  className = "nav-imgs" src = {email} alt = "email"/>
                </a>
            </div>
            <div className="imgContainer">
                <a href = "https://github.com/phamkelly17" target = "_blank">
                    <img  className = "nav-imgs" src = {github} alt = "github"/>
                </a>
            </div>
            <div className="imgContainer">
            <a href = "https://www.linkedin.com/in/kellypham16" target = "_blank">
                <img  className = "nav-imgs" src = {linkedin} alt = "linkedin"/>
            </a>
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
