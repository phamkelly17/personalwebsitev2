import { React, useEffect } from "react";
import "./HorizontalScroll.css";
import link from "../../images/link.png";
import github from "../../images/github.png";

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
      {listItems}
      {/* <div className='card'>
        <img className="nav-imgs" src={image} alt="github" />
            <h2 className='bruh'>1</h2>
        </div>
        <div className='card'>
            <h2 className='bruh'>2</h2>
        </div>
        <div className='card'>
            <h2 className='bruh'>3</h2>
        </div>
        <div className='card'>
            <h2 className='bruh'>4</h2>
        </div>
        <div className='card'>
            <h2 className='bruh'>5</h2>
        </div>
        <div className='card'>
            <h2 className='bruh'>6</h2>
        </div>
        <div className='card'>
            <h2 className='bruh'>7</h2>
        </div>
        <div className='card'>
            <h2 className='bruh'>8</h2>
        </div> */}
    </div>
  );
};

export default HorizontalScroll;
