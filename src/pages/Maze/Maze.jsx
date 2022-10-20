import { React, useState, useEffect } from "react";
import "./Maze.css";
import bulbasaur from "../../images/Maze/bulbasaur.png";
const Maze = () => {
  const [position, setPosition] = useState([0, 0]);
  const MOVE_BY = 50;

  const box1 = {
    width: 4,
    left: 0,
  };
  const box2 = {
    width: 15,
    left: 5,
  };
  const box3 = {
    width: 1,
    left: 21,
  };
  const box4 = {
    width: 1,
    left: 3,
  };
  const box5 = {
    width: 3,
    left: 1,
  };
  const box6 = {
    width: 1,
    left: 1,
  };
  const box7 = {
    width: 1,
    left: 5,
  };
  const box8 = {
    width: 2,
    left: 5,
  };
  const box9 = {
    width: 2,
    left: 5,
  };
  const box10 = {
    width: 2,
    left: 5,
  };
  const box11 = {
    width: 1,
    left: 8,
  };
  const box12 = {
    width: 4,
    left: 0,
  };
  const box13 = {
    width: 1,
    left: 3,
  };
  const box14 = {
    width: 3,
    left: 1,
  };
  const box15 = {
    width: 1,
    left: 1,
  };
  const box16 = {
    width: 1,
    left: 3,
  };
  const box17 = {
    width: 3,
    left: 3,
  };
  const box18 = {
    width: 1,
    left: 5,
  };
  const box19 = {
    width: 1,
    left: 5,
  };
  const box20 = {
    width: 3,
    left: 5,
  };
  const box21 = {
    width: 1,
    left: 7,
  };
  const box22 = {
    width: 10,
    left: 7,
  };
  const box23 = {
    width: 10,
    left: 8,
  };
  const box24 = {
    width: 1,
    left: 13,
  };
  const box25 = {
    width: 10,
    left: 9,
  };
  const box26 = {
    width: 2,
    left: 19,
  };
  const box27 = {
    width: 1,
    left: 23,
  };
  const box28 = {
    width: 6,
    left: 20,
  };
  const box29 = {
    width: 1,
    left: 27,
  };
  const box30 = {
    width: 3,
    left: 25,
  };
  const box31 = {
    width: 1,
    left: 25,
  };
  const box32 = {
    width: 1,
    left: 9,
  };
  const box33 = {
    width: 5,
    left: 9,
  };
  const box34 = {
    width: 1,
    left: 13,
  };
  const box35 = {
    width: 3,
    left: 11,
  };
  const box36 = {
    width: 1,
    left: 15,
  };
  const box37 = {
    width: 1,
    left: 15,
  };
  const box38 = {
    width: 3,
    left: 15,
  };
  const box39 = {
    width: 1,
    left: 17,
  };
  const box40 = {
    width: 1,
    left: 19,
  };
  const box41 = {
    width: 5,
    left: 17,
  };
  const box42 = {
    width: 4,
    left: 21,
  };
  const box43 = {
    width: 4,
    left: 23,
  };
  const box44 = {
    width: 2,
    left: 20,
  };
  const box45 = {
    width: 1,
    left: 28,
  };
  const box46 = {
    width: 3,
    left: 26,
  };
  const box47 = {
    width: 3,
    left: 24,
  };
  const box48 = {
    width: 5,
    left: 23,
  };
  const box49 = {
    width: 1,
    left: 23,
  };
  const box50 = {
    width: 1,
    left: 25,
  };
  const box51 = {
    width: 1,
    left: 21,
  };
  const box52 = {
    width: 1,
    left: 19,
  };
  const box53 = {
    width: 2,
    left: 21,
  };

  const row1 = [box2, box3,box29];
  const row2 = [box1, box3, box4, box24, box27, box29, box30];
  const row3 = [box3, box4, box7, box8, box23, box26,box27, box29, box31];
  const row4 = [box4, box6, box7, box27, box29];
  const row5 = [box4, box6, box7, box9, box11, box25,box27, box28, box29];
  const row6 = [box4, box5, box6, box7, box11, box29];
  const row7 = [box7, box10, box11, box29,box49, box50, box52, box53];
  const row8 = [box7, box11, box12, box13, box29, box49, box50, box51, box52];
  const row9 = [box7, box13, box21, box29, box49, box52];
  const row10 = [box7, box13, box14, box15, box20, box21, box29, box37, box41, box48];
  const row11 = [box15, box21, box33, box37];
  const row12 = [box15, box16, box17, box18, box21, box32, box34, box35, box37, box38, box39, box40, box42, box46];
  const row13 = [box15,box16, box18, box21, box35, box39, box40, box43, box45];
  const row14 = [box15,box16, box36, box39, box40, box43, box44, box45, box47];
  const row15 = [box16, box19, box22, box40 ,box43, box45];

  const rowsToRowArray = {
    0: row1,
    1: row2,
    2: row3,
    3: row4,
    4: row5,
    5: row6,
    6: row7,
    7: row8,
    8: row9,
    9: row10,
    10: row11,
    11: row12,
    12: row13,
    13: row14,
    14: row15,
  };

  function doesIntersect(xPosition, rows) {
    console.log(rows);
    for (var i = 0; i < rows.length; i++) {
      if (
        xPosition * 50 >= rows[i].left * 50 &&
        xPosition * 50 < 50 * rows[i].width + rows[i].left * 50
      ) {
        return true;
      }
    }
    return false;
  }

  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case 37:
        if (position[0] !== 0) {
          if (!doesIntersect(position[0] - 1, rowsToRowArray[position[1]])) {
            setPosition([position[0] - 1, position[1]]);
            document.getElementById("bulbasaur").style.left = (
              (position[0] - 1) *
              MOVE_BY
            )
              .toString()
              .concat("px");
          }
        }
        break;
      case 38:
        if (position[1] !== 0) {
          if (!doesIntersect(position[0], rowsToRowArray[position[1] - 1])) {
            setPosition([position[0], position[1] - 1]);
            document.getElementById("bulbasaur").style.top = (
              (position[1] - 1) *
              MOVE_BY
            )
              .toString()
              .concat("px");
          }
        }
        break;
      case 39:
        e.preventDefault();
        if (!doesIntersect(position[0] + 1, rowsToRowArray[position[1]])) {
          setPosition([position[0] + 1, position[1]]);
          document.getElementById("bulbasaur").style.left = (
            (position[0] + 1) *
            MOVE_BY
          )
            .toString()
            .concat("px");
        }
        break;
      case 40:
        e.preventDefault();
        if (!doesIntersect(position[0], rowsToRowArray[position[1] + 1])) {
          console.log("huh");
          setPosition([position[0], position[1] + 1]);
          document.getElementById("bulbasaur").style.top = (
            (position[1] + 1) *
            MOVE_BY
          )
            .toString()
            .concat("px");
        }
    }
  };

  function handleResize() {
    document.getElementById("firstPageContainer").style.height = window.innerHeight
      .toString()
      .concat("px");

  }

  useEffect(() => {
    document.getElementById("firstPageContainer").style.height = window.innerHeight
      .toString() 
      .concat("px");
  });

  window.addEventListener("resize", handleResize);


  return (
    <div id="firstPageContainer">

      <div id="gameContainer">
        <img id="bulbasaur" src={bulbasaur} alt="bulbasaur" />
        <div id="kellyphamContainer">
          <div id="kellypham">KELLY PHAM</div>
          <div id="instructions">Use your arrow keys to collect flowers!</div>
        </div>
        <div style={{ top: "50px" }} className="horiz4 wall"></div>
        <div
          style={{ top: "0px", left: "250px" }}
          className="horiz15 wall"
        ></div>
        <div style={{ top: "0px", left: "1050px" }} className="vert3 wall"></div>

        {/* <div
          style={{ top: "0px", left: "1050px", backgroundColor:'yellow' }}
          className="vert2 wall"
        ></div> */}
        <div
          style={{ top: "50px", left: "150px" }}
          className="vert5 wall"
        ></div>
        <div
          style={{ top: "250px", left: "50px" }}
          className="horiz3 wall"
        ></div>
        <div
          style={{ top: "150px", left: "50px" }}
          className="vert3 wall"
        ></div>
        <div
          style={{ top: "100px", left: "250px" }}
          className="vert8 wall"
        ></div>
        <div
          style={{ top: "100px", left: "250px" }}
          className="horiz2 wall"
        ></div>
        <div
          style={{ top: "200px", left: "250px" }}
          className="horiz2 wall"
        ></div>
        <div
          style={{ top: "300px", left: "250px" }}
          className="horiz2 wall"
        ></div>
        <div style={{ top: "200px", left: "400px" }} className="vert4 wall"></div>
        <div style={{ top: "350px", left: "0px" }} className="horiz4 wall"></div>
        <div style={{ top: "350px", left: "150px" }} className="vert3 wall"></div>
        <div style={{ top: "450px", left: "50px" }} className="horiz3 wall"></div>
        <div style={{ top: "450px", left: "50px" }} className="vert5 wall"></div>
        <div style={{ top: "550px", left: "150px" }} className="vert4 wall"></div>
        <div style={{ top: "550px", left: "150px" }} className="horiz3 wall"></div>
        <div style={{ top: "550px", left: "250px" }} className="vert2 wall"></div>
        <div style={{ top: "700px", left: "250px" }} className="single wall"></div>
        <div style={{ top: "450px", left: "250px" }} className="horiz3 wall"></div>
        <div style={{ top: "400px", left: "350px" }} className="vert5 wall"></div>
        <div style={{ top: "700px", left: "350px" }} className="horiz10 wall"></div>
        <div style={{ top: "100px", left: "400px" }} className="horiz10 wall"></div>
        <div style={{ top: "50px", left: "650px" }} className="single wall"></div>
        <div style={{ top: "200px", left: "450px" }} className="horiz10 wall"></div>
        <div style={{ top: "100px", left: "950px" }} className="horiz3 wall"></div>
        <div style={{ top: "200px", left: "1000px" }} className="horiz6 wall"></div>
        <div style={{ top: "50px", left: "1150px" }} className="vert3 wall"></div>
        <div style={{ top: "0px", left: "1350px" }} className="vert10 wall"></div>
        <div style={{ top: "50px", left: "1250px" }} className="horiz3 wall"></div>
        <div style={{ top: "100px", left: "1250px" }} className="single wall"></div>
        <div style={{ top: "550px", left: "450px" }} className="vert2 wall"></div>
        <div style={{ top: "500px", left: "450px" }} className="horiz5 wall"></div>
        <div style={{ top: "550px", left: "650px" }} className="single wall"></div>
        <div style={{ top: "600px", left: "550px" }} className="horiz3 wall"></div>
        <div style={{ top: "650px", left: "750px" }} className="single wall"></div>
        <div style={{ top: "450px", left: "750px" }} className="vert3 wall"></div>
        <div style={{ top: "550px", left: "750px" }} className="horiz3 wall"></div>
        <div style={{ top: "550px", left: "850px" }} className="vert3 wall"></div>
        <div style={{ top: "550px", left: "950px" }} className="vert4 wall"></div>
        <div style={{ top: "450px", left: "850px" }} className="horiz5 wall"></div>
        <div style={{ top: "550px", left: "1050px" }} className="horiz4 wall"></div>
        <div style={{ top: "600px", left: "1150px" }} className="vert3 wall"></div>
        <div style={{ top: "650px", left: "1000px" }} className="horiz2 wall"></div>
        <div style={{ top: "600px", left: "1400px" }} className="vert3 wall"></div>
        <div style={{ top: "550px", left: "1300px" }} className="horiz3 wall"></div>
        <div style={{ top: "650px", left: "1200px" }} className="horiz3 wall"></div>
        <div style={{ top: "450px", left: "1150px" }} className="horiz5 wall"></div>
        <div style={{ top: "300px", left: "1150px" }} className="vert4 wall"></div>
        <div style={{ top: "300px", left: "1250px" }} className="vert2 wall"></div>
        <div style={{ top: "300px", left: "1050px" }} className="vert2 wall"></div>
        <div style={{ top: "300px", left: "950px" }} className="vert3 wall"></div>
        <div style={{ top: "300px", left: "1050px" }} className="horiz2 wall"></div>








      </div>
    </div>
  );
};

export default Maze;
