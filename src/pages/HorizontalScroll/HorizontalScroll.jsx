import { React, useEffect } from "react";
import "./HorizontalScroll.css";
import link from "../../images/link.png";
import github from "../../images/github.png";
import Fade from 'react-reveal/Fade';



const HorizontalScroll = ({ experiences }) => {
  const listItems = experiences.map((experience) => (
    <div className="card">
      <img className="expImg" src={experience["image"]} alt="expImg" />
      <div className="expTitle">{experience["name"]}</div>
      <div className="expLinksContainer">
        {experience["github"] && (
          <a href={experience["github"]} target="_blank">
            <img className="expLinkImg" src={github} alt="github" />
          </a>
        )}
        {experience["link"] && (
          <a href={experience["link"]} target="_blank">
            <img className="expLinkImg" src={link} alt="link" />
          </a>
        )}
      </div>
      <div className="expItalics">{experience["jobTitle"]}</div>
      <div className="expItalics">{experience["date"]}</div>
      <ul className="expBulletpoints">
        {experience["bulletpoints"].map((bulletpoint) => (
          <li>{bulletpoint}</li>
        ))}
      </ul>
    </div>
  ));
  return (
    <div className="horizontalScrollContainer">
        <Fade right>
        {listItems}
        </Fade>
    </div>
  );
};

export default HorizontalScroll;
