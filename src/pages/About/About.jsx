import { React, useEffect } from "react";
import "./About.css";
import Zoom from "react-reveal/Zoom";

const About = () => {

  return (
    <div id="aboutContainer">
      <Zoom>
      <p>Hi, my name is Kelly and I am a second year student studying Systems Design Engineering at the University of Waterloo.
            What is Systems Design you ask? It's defined as "look[ing] at the big picture to find the connections that advance technology and innovation". I'm interested in full-stack development and more specifically, I'm passionate about building software applications that have an impact on sustainability or the healthcare industry. I'd love to connect and feel free to reach out at k27pham@uwaterloo.ca!
        </p>
      </Zoom>
    </div>
  );
};

export default About;
