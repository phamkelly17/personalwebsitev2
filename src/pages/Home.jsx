import { React, useEffect, useState } from "react";
import "./Home.css";
import email from "../images/email.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import tribalscale from "../images/experiences/tribalscale.png";
import irdeto from "../images/experiences/irdeto.png";
import uwpm from "../images/experiences/uwpm.jpeg";
import uw_blueprint from "../images/experiences/uw_blueprint.png";
import sydeproject from "../images/projects/sydeproject.png";
import website from "../images/projects/website.png";
import arrivecan from "../images/projects/arrivecan.png";
import fish from "../images/projects/fish.png";
import curaearth from "../images/projects/curaearth.png";
import About from "./About/About";
import HorizontalScroll from "./HorizontalScroll/HorizontalScroll";
import { Link, animateScroll as scroll } from "react-scroll";
import Maze from "./Maze/Maze";
import flower from "../images/Maze/flower.png";

const RESUME_LINK =
  "https://drive.google.com/file/d/16NRLTqqUijPB7EGke8RNt_wIofwmQmIJ/view?usp=sharing";

const EXPERIENCES = [
  {
    image: uw_blueprint,
    name: "UW Blueprint",
    jobTitle: "Projects Developer",
    date: "Dec 2022 - present",
    bulletpoints: ["Building tech for social good :)"],
    link: "https://uwblueprint.org/",
    github: null,
  },
  {
    image: uwpm,
    name: "UW Product Management Club",
    jobTitle: "Full-Stack Developer",
    date: "Oct 2022 - Dec 2022",
    bulletpoints: [
      "Collaborate with a team of designers to implement website redesigns and update website to reflect on upcoming club events in React.js",
    ],
    link: "https://uwpm.club/",
    github: null,
  },
  {
    image: tribalscale,
    name: "TribalScale",
    jobTitle: "Agile Software Engineering",
    date: "Sept 2022 - December 2022",
    bulletpoints: [
      "Collaborated on a team of 3 developers to create a website from scratch  using TypeScript and Next.js to allow users to signup and accept challenges for various health programs",
      "Leveraged GraphQL to query and mutate data and Jest  to test components",
      "Implemented over 15 components and 7 pages and engaged with the client to discuss optimal user experience"
    ],
    link: null,
    github: null,
  },
  {
    image: irdeto,
    name: "Irdeto",
    jobTitle: "Junior Software Developer",
    date: "Jan 2022 - April 2022",
    bulletpoints: [
      "Leveraged Python socket programming to rewrite test infrastructure daemon from C to Python and implemented mock tests to employ testing with the API ",
      "Consolidated 7 automation file frameworks containing over 30,000 tests into a single makefile framework and implemented support for a variety of testable components and test environments",
    ],
    link: null,
    github: null,
  },
];

const PROJECTS = [
  {
    image: arrivecan,
    name: "ArriveCAN",
    jobTitle: null,
    date: "October 2022",
    bulletpoints: [
      "Participated in a company-wide hackathon to recreate the ArriveCAN app in a weekend and developed the front-end in React Native",
    ],
    link: "https://www.theglobeandmail.com/politics/article-two-canadian-tech-companies-say-each-recreated-arrivecan-app-to-show/",
    github: null,
  },
  {
    image: sydeproject,
    name: "SydeProject",
    jobTitle: null,
    date: "Feb 2022 - Apr 2022",
    bulletpoints: [
      "Prototyped an iOS app using Swift and SwiftUI, designed to help students share ideas for side projects and find project teams to join",
      "Deployed a Firebase database to store user information",
    ],
    link: "https://docs.google.com/presentation/d/1MJvNLChg_QhD5bT12Rhs1ug141MMkr0TQntJsGCyCSg/edit?usp=sharing",
    github: "https://github.com/phamkelly17/syde-project",
  },
  {
    image: curaearth,
    name: "CuraEarth",
    jobTitle: null,
    date: "January 2022",
    bulletpoints: [
      "Submission for SheHacks 2022 Hackathon, all work was done within 36 hours",
      "Developed the front-end of the website using React.js. Created the navbar, homepage, and contact section using HTML and CSS",
      "Added functionality of the buttons on the homepage using JavaScript",
    ],
    link: "https://devpost.com/software/cura-planet",
    github: "https://github.com/phamkelly17/cura-earth",
  },
  {
    image: fish,
    name: "Flappy Fish",
    jobTitle: null,
    date: "November 2021",
    bulletpoints: [
      'Created the game "Flappy Fish" in a VSCode terminal using C++',
      "User is able to use the 'w' and 's' keys to move up and down in order to navigate through the pipes. The game ends when the fish hits a pipe",
      "The speed of the fish increases as the game continues and the fish can eat powerups to temporarily slow down the game speed",
    ],
    link: null,
    github: "https://github.com/phamkelly17/flappy-fish",
  },
  {
    image: website,
    name: "Kelly's Shop",
    jobTitle: null,
    date: "April 2021 - June 2021",
    bulletpoints: [
      "Programmed a dynamic food ordering website using a Django framework for CS50x Web Programming course offered by Harvard University using Python, SQLite, JavaScript, HTML, and CSS",
    ],
    link: "https://www.youtube.com/watch?v=Wpw-XTLp3A4",
    github: "https://github.com/phamkelly17/final_project",
  },
];
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
        <Maze />
      </div>
      <div id="secondPage">
        <div id="menuContainer">
          <div id="about" className="optionContainer">
            {!showAbout ? (
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
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
              </Link>
            ) : (
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
            )}

            {showAbout && <About></About>}
          </div>
          <div id="experience" className="optionContainer">
            {!showExperience ? (
              <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <h1
                  className="menuTab"
                  onClick={() => {
                    setShowExperience(!showExperience);
                  }}
                >
                  EXPERIENCE
                </h1>
              </Link>
            ) : (
              <h1
                className="menuTab"
                onClick={() => {
                  setShowExperience(!showExperience);
                }}
              >
                EXPERIENCE
              </h1>
            )}
            {showExperience && (
              <HorizontalScroll experiences={EXPERIENCES}></HorizontalScroll>
            )}
          </div>
          <div id="projects" className="optionContainer">
            {!showProjects ? (
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <h1
                  className="menuTab"
                  onClick={() => {
                    setShowProjects(!showProjects);
                  }}
                >
                  PROJECTS
                </h1>
              </Link>
            ) : (
              <h1
                className="menuTab"
                onClick={() => {
                  setShowProjects(!showProjects);
                }}
              >
                PROJECTS
              </h1>
            )}

            {showProjects && (
              <HorizontalScroll experiences={PROJECTS}></HorizontalScroll>
            )}
          </div>
          <div className="optionContainer">
            <a className="resumeLink" href={RESUME_LINK} target="_blank">
              <h1 className="menuTab">RESUME</h1>
            </a>
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
          <img className="bottomBarFlower" src={flower} alt="flower" />

          <p>Designed by Kelly Pham 2022</p>
          <img className="bottomBarFlower" src={flower} alt="flower" />
        </div>
      </div>
    </div>
  );
};

export default Home;
