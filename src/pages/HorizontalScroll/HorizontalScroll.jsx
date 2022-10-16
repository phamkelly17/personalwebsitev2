import { React, useEffect } from "react";
import "./HorizontalScroll.css";

const HorizontalScroll = ({image}) => {
  return (
    <div className="horizontalScrollContainer">
        <div className='card'>
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
        </div>


    </div>
  );
};

export default HorizontalScroll;
