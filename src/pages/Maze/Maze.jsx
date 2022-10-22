import { React, useState, useEffect } from "react";
import "./Maze.css";
import bulbasaur from "../../images/Maze/bulbasaur.png";
import flower from "../../images/Maze/flower.png";
import FACTS_ABOUT_ME from "./factsAboutMe";
import Zoom from "react-reveal/Zoom";
import { Link, animateScroll as scroll } from "react-scroll";

const Maze = () => {
  const [position, setPosition] = useState([0, 0]);
  const [showFlowerCard, setShowFlowerCard] = useState(false);
  const [gameMode1, setGameMode1] = useState(true);
  const [gameMode2, setGameMode2] = useState(false);
  const [gameMode3, setGameMode3] = useState(false);
  const [cardText, setCardText] = useState("");
  const [cardImage, setCardImage] = useState("");
  const [flowerCollected, setFlowerCollected] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [numCollected, setNumCollected] = useState(0);

  const MOVE_BY = 50;

  const box1 = {
    width: 4,
    left: 0,
    flower: false,
  };
  const box2 = {
    width: 15,
    left: 5,
    flower: false,
  };
  const box3 = {
    width: 1,
    left: 21,
    flower: false,
  };
  const box4 = {
    width: 1,
    left: 3,
    flower: false,
  };
  const box5 = {
    width: 3,
    left: 1,
    flower: false,
  };
  const box6 = {
    width: 1,
    left: 1,
    flower: false,
  };
  const box7 = {
    width: 1,
    left: 5,
    flower: false,
  };
  const box8 = {
    width: 2,
    left: 5,
    flower: false,
  };
  const box9 = {
    width: 2,
    left: 5,
    flower: false,
  };
  const box10 = {
    width: 2,
    left: 5,
    flower: false,
  };
  const box11 = {
    width: 1,
    left: 8,
    flower: false,
  };
  const box12 = {
    width: 4,
    left: 0,
    flower: false,
  };
  const box13 = {
    width: 1,
    left: 3,
    flower: false,
  };
  const box14 = {
    width: 3,
    left: 1,
    flower: false,
  };
  const box15 = {
    width: 1,
    left: 1,
    flower: false,
  };
  const box16 = {
    width: 1,
    left: 3,
    flower: false,
  };
  const box17 = {
    width: 3,
    left: 3,
    flower: false,
  };
  const box18 = {
    width: 1,
    left: 5,
    flower: false,
  };
  const box19 = {
    width: 1,
    left: 5,
    flower: false,
  };
  const box20 = {
    width: 3,
    left: 5,
    flower: false,
  };
  const box21 = {
    width: 1,
    left: 7,
    flower: false,
  };
  const box22 = {
    width: 10,
    left: 7,
    flower: false,
  };
  const box23 = {
    width: 10,
    left: 8,
    flower: false,
  };
  const box24 = {
    width: 1,
    left: 13,
    flower: false,
  };
  const box25 = {
    width: 10,
    left: 9,
    flower: false,
  };
  const box26 = {
    width: 2,
    left: 19,
    flower: false,
  };
  const box27 = {
    width: 1,
    left: 23,
    flower: false,
  };
  const box28 = {
    width: 6,
    left: 20,
    flower: false,
  };
  const box29 = {
    width: 1,
    left: 27,
    flower: false,
  };
  const box30 = {
    width: 3,
    left: 25,
    flower: false,
  };
  const box31 = {
    width: 1,
    left: 25,
    flower: false,
  };
  const box32 = {
    width: 1,
    left: 9,
    flower: false,
  };
  const box33 = {
    width: 5,
    left: 9,
    flower: false,
  };
  const box34 = {
    width: 1,
    left: 13,
    flower: false,
  };
  const box35 = {
    width: 3,
    left: 11,
    flower: false,
  };
  const box36 = {
    width: 1,
    left: 15,
    flower: false,
  };
  const box37 = {
    width: 1,
    left: 15,
    flower: false,
  };
  const box38 = {
    width: 3,
    left: 15,
    flower: false,
  };
  const box39 = {
    width: 1,
    left: 17,
    flower: false,
  };
  const box40 = {
    width: 1,
    left: 19,
    flower: false,
  };
  const box41 = {
    width: 5,
    left: 17,
    flower: false,
  };
  const box42 = {
    width: 4,
    left: 21,
    flower: false,
  };
  const box43 = {
    width: 1,
    left: 23,
    flower: false,
  };
  const box44 = {
    width: 2,
    left: 20,
    flower: false,
  };
  const box45 = {
    width: 1,
    left: 28,
    flower: false,
  };
  const box46 = {
    width: 3,
    left: 26,
    flower: false,
  };
  const box47 = {
    width: 3,
    left: 24,
    flower: false,
  };
  const box48 = {
    width: 5,
    left: 23,
    flower: false,
  };
  const box49 = {
    width: 1,
    left: 23,
    flower: false,
  };
  const box50 = {
    width: 1,
    left: 25,
    flower: false,
  };
  const box51 = {
    width: 1,
    left: 21,
    flower: false,
  };
  const box53 = {
    width: 2,
    left: 21,
    flower: false,
  };
  const kellyphamContainer = {
    width: 11,
    left: 9,
    flower: false,
  };
  const flower1 = {
    width: 1,
    left: 2,
    flower: true,
    index: 0,
  };
  const flower2 = {
    width: 1,
    left: 6,
    flower: true,
    index: 1,
  };
  const flower3 = {
    width: 1,
    left: 4,
    flower: true,
    index: 2,
  };
  const flower4 = {
    width: 1,
    left: 14,
    flower: true,
    index: 3,
  };
  const flower5 = {
    width: 1,
    left: 16,
    flower: true,
    index: 4,
  };
  const flower6 = {
    width: 1,
    left: 26,
    flower: true,
    index: 5,
  };
  const flower7 = {
    width: 1,
    left: 22,
    flower: true,
    index: 6,
  };
  const flower8 = {
    width: 1,
    left: 24,
    flower: true,
    index: 7,
  };

  const row1 = [box2, box3, box29];
  const row2 = [flower4, box1, box3, box4, box24, box27, box29, box30];
  const row3 = [
    flower6,
    box3,
    box4,
    box7,
    box8,
    box23,
    box26,
    box27,
    box29,
    box31,
  ];
  const row4 = [box4, box6, box7, box27, box29];
  const row5 = [
    flower1,
    box4,
    box6,
    box7,
    box9,
    box11,
    box25,
    box27,
    box28,
    box29,
  ];
  const row6 = [box4, box5, box6, box7, box11, box29];
  const row7 = [
    box7,
    box10,
    box11,
    box29,
    box49,
    box50,
    box53,
    kellyphamContainer,
  ];
  const row8 = [
    flower7,
    box7,
    box11,
    box12,
    box13,
    box29,
    box49,
    box50,
    box51,
    kellyphamContainer,
  ];
  const row9 = [flower2, box7, box13, box21, box29, box49, kellyphamContainer];
  const row10 = [
    box7,
    box13,
    box14,
    box15,
    box20,
    box21,
    box29,
    box37,
    box41,
    box48,
  ];
  const row11 = [flower5, box15, box21, box33, box37];
  const row12 = [
    box15,
    box16,
    box17,
    box18,
    box21,
    box32,
    box34,
    box37,
    box38,
    box39,
    box40,
    box42,
    box46,
  ];
  const row13 = [
    flower8,
    box15,
    box16,
    box18,
    box21,
    box35,
    box39,
    box40,
    box43,
    box45,
  ];
  const row14 = [box15, box16, box36, box39, box40, box43, box44, box45, box47];
  const row15 = [flower3, box16, box19, box22, box40, box43, box45];

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
    for (var i = 0; i < rows.length; i++) {
      if (
        xPosition * 50 >= rows[i].left * 50 &&
        xPosition * 50 < 50 * rows[i].width + rows[i].left * 50
      ) {
        if (rows[i].flower) {
          if (!flowerCollected[rows[i].index]) {
            let newArr = [...flowerCollected];
            switch (xPosition) {
              case 2:
                newArr[0] = true;
                setFlowerCollected(newArr);
                break;
              case 6:
                newArr[1] = true;
                setFlowerCollected(newArr);
                break;
              case 4:
                newArr[2] = true;
                setFlowerCollected(newArr);
                break;
              case 14:
                newArr[3] = true;
                setFlowerCollected(newArr);
                break;
              case 16:
                newArr[4] = true;
                setFlowerCollected(newArr);
                break;
              case 26:
                newArr[5] = true;
                setFlowerCollected(newArr);
                break;
              case 22:
                newArr[6] = true;
                setFlowerCollected(newArr);
                break;
              case 24:
                newArr[7] = true;
                setFlowerCollected(newArr);
                break;
            }
            if (gameMode1) {
              var randNum = Math.floor(Math.random() * FACTS_ABOUT_ME.length);

              setCardText(FACTS_ABOUT_ME[randNum]);
            } else if (gameMode2) {
              fetch("https://api.adviceslip.com/advice")
                .then((res) => res.json())
                .then((quote) => {
                  setCardText(quote.slip.advice);
                });
            } else {
              fetch("https://randomfox.ca/floof/?ref=apilist.fun")
                .then((res) => res.json())
                .then((response) => {
                  setCardImage(response.image);
                });
            }
            setNumCollected(numCollected + 1);
            setShowFlowerCard(true);
          }

          return false;
        }
        return true;
      }
    }
    return false;
  }

  const restart = () => {
    setPosition([0,0])
    document.getElementById("bulbasaur").style.left = 0
    document.getElementById("bulbasaur").style.top = 0
    setFlowerCollected([false, false, false, false, false, false, false, false]);
    setShowFlowerCard(false);
  };
  document.onkeydown = function (e) {
    e.preventDefault();
    if (!showFlowerCard) {
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
          if (position[0] === 28) break;
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
          if (!doesIntersect(position[0], rowsToRowArray[position[1] + 1])) {
            setPosition([position[0], position[1] + 1]);
            document.getElementById("bulbasaur").style.top = (
              (position[1] + 1) *
              MOVE_BY
            )
              .toString()
              .concat("px");
          }
      }
    }
  };

  function handleResize() {
    document.getElementById("firstPageContainer").style.height =
      window.innerHeight.toString().concat("px");
    document.getElementById("firstPageContainer").style.width =
      window.innerWidth.toString().concat("px");
    document.getElementById("gameContainer").style.height = window.innerHeight
      .toString()
      .concat("px");
    document.getElementById("gameContainer").style.width = window.innerWidth
      .toString()
      .concat("px");
  }

  useEffect(() => {
    document.getElementById("firstPageContainer").style.height =
      window.innerHeight.toString().concat("px");
    document.getElementById("firstPageContainer").style.width =
      window.innerWidth.toString().concat("px");
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
        {/* 0 */}
        <div style={{ top: "50px" }} className="horiz4 wall"></div>
        <div
          style={{ top: "0px", left: "250px" }}
          className="horiz15 wall"
        ></div>
        <div
          style={{ top: "0px", left: "1050px" }}
          className="vert3 wall"
        ></div>
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
        <div
          style={{ top: "200px", left: "400px" }}
          className="vert4 wall"
        ></div>
        {/* 10 */}
        <div
          style={{ top: "350px", left: "0px" }}
          className="horiz4 wall"
        ></div>
        <div
          style={{ top: "350px", left: "150px" }}
          className="vert3 wall"
        ></div>
        <div
          style={{ top: "450px", left: "50px" }}
          className="horiz3 wall"
        ></div>
        <div
          style={{ top: "450px", left: "50px" }}
          className="vert5 wall"
        ></div>
        <div
          style={{ top: "550px", left: "150px" }}
          className="vert4 wall"
        ></div>
        <div
          style={{ top: "550px", left: "150px" }}
          className="horiz3 wall"
        ></div>
        <div
          style={{ top: "550px", left: "250px" }}
          className="vert2 wall"
        ></div>
        <div
          style={{ top: "700px", left: "250px" }}
          className="single wall"
        ></div>
        <div
          style={{ top: "450px", left: "250px" }}
          className="horiz3 wall"
        ></div>
        <div
          style={{ top: "400px", left: "350px" }}
          className="vert5 wall"
        ></div>
        {/* 20 */}
        <div
          style={{ top: "700px", left: "350px" }}
          className="horiz10 wall"
        ></div>
        <div
          style={{ top: "100px", left: "400px" }}
          className="horiz10 wall"
        ></div>
        <div
          style={{ top: "50px", left: "650px" }}
          className="single wall"
        ></div>
        <div
          style={{ top: "200px", left: "450px" }}
          className="horiz10 wall"
        ></div>
        <div
          style={{ top: "100px", left: "950px" }}
          className="horiz3 wall"
        ></div>
        <div
          style={{ top: "200px", left: "1000px" }}
          className="horiz6 wall"
        ></div>
        <div
          style={{ top: "50px", left: "1150px" }}
          className="vert3 wall"
        ></div>
        <div
          style={{ top: "0px", left: "1350px" }}
          className="vert10 wall"
        ></div>
        <div
          style={{ top: "50px", left: "1250px" }}
          className="horiz3 wall"
        ></div>
        <div
          style={{ top: "100px", left: "1250px" }}
          className="single wall"
        ></div>
        {/* 30 */}
        <div
          style={{ top: "550px", left: "450px" }}
          className="vert2 wall"
        ></div>
        <div
          style={{ top: "500px", left: "450px" }}
          className="horiz5 wall"
        ></div>
        <div
          style={{ top: "550px", left: "650px" }}
          className="single wall"
        ></div>
        <div
          style={{ top: "600px", left: "550px" }}
          className="horiz3 wall"
        ></div>
        <div
          style={{ top: "650px", left: "750px" }}
          className="single wall"
        ></div>
        <div
          style={{ top: "450px", left: "750px" }}
          className="vert3 wall"
        ></div>
        <div
          style={{ top: "550px", left: "750px" }}
          className="horiz3 wall"
        ></div>
        <div
          style={{ top: "550px", left: "850px" }}
          className="vert3 wall"
        ></div>
        <div
          style={{ top: "550px", left: "950px" }}
          className="vert4 wall"
        ></div>
        <div
          style={{ top: "450px", left: "850px" }}
          className="horiz5 wall"
        ></div>
        {/* 40 */}
        <div
          style={{ top: "550px", left: "1050px" }}
          className="horiz4 wall"
        ></div>
        <div
          style={{ top: "600px", left: "1150px" }}
          className="vert3 wall"
        ></div>
        <div
          style={{ top: "650px", left: "1000px" }}
          className="horiz2 wall"
        ></div>
        <div
          style={{ top: "600px", left: "1400px" }}
          className="vert3 wall"
        ></div>
        <div
          style={{ top: "550px", left: "1300px" }}
          className="horiz3 wall"
        ></div>
        <div
          style={{ top: "650px", left: "1200px" }}
          className="horiz3 wall"
        ></div>
        <div
          style={{ top: "450px", left: "1150px" }}
          className="horiz5 wall"
        ></div>
        <div
          style={{ top: "300px", left: "1150px" }}
          className="vert4 wall"
        ></div>
        <div
          style={{ top: "300px", left: "1250px" }}
          className="vert2 wall"
        ></div>
        <div
          style={{ top: "300px", left: "1050px" }}
          className="vert2 wall"
        ></div>
        {/* 50 */}
        <div
          style={{ top: "300px", left: "1050px" }}
          className="horiz2 wall"
        ></div>
        {/* 42 */}
        {!flowerCollected[0] && (
          <img
            style={{ top: "200px", left: "100px" }}
            id="0"
            className="flower"
            src={flower}
            alt="flower"
          />
        )}
        {!flowerCollected[1] && (
          <img
            style={{ top: "400px", left: "300px" }}
            id="1"
            className="flower"
            src={flower}
            alt="flower"
          />
        )}

        {!flowerCollected[2] && (
          <img
            style={{ top: "700px", left: "200px" }}
            id="2"
            className="flower"
            src={flower}
            alt="flower"
          />
        )}

        {!flowerCollected[3] && (
          <img
            style={{ top: "50px", left: "700px" }}
            id="3"
            className="flower"
            src={flower}
            alt="flower"
          />
        )}

        {!flowerCollected[4] && (
          <img
            style={{ top: "500px", left: "800px" }}
            id="4"
            className="flower"
            src={flower}
            alt="flower"
          />
        )}

        {!flowerCollected[5] && (
          <img
            style={{ top: "100px", left: "1300px" }}
            id="5"
            className="flower"
            src={flower}
            alt="flower"
          />
        )}

        {!flowerCollected[6] && (
          <img
            style={{ top: "350px", left: "1100px" }}
            id="6"
            className="flower"
            src={flower}
            alt="flower"
          />
        )}

        {!flowerCollected[7] && (
          <img
            style={{ top: "600px", left: "1200px" }}
            id="7"
            className="flower"
            src={flower}
            alt="flower"
          />
        )}

        {showFlowerCard && (
          <Zoom>
            <div id="flowerCard">
              <div onClick={() => setShowFlowerCard(false)} id="flowerCardX">
                Close
              </div>
              <img id="flowerInCard" src={flower} alt="flower" />
              <div id="flowerCardTitle">Flower collected!</div>
              {gameMode1 || gameMode2 ? (
                <div id="cardText">{cardText}</div>
              ) : (
                <img id="cardImage" src={cardImage} />
              )}

              {numCollected === 8 && (
                <button onClick={restart} id="restart" className="gameModeBtn">
                  Restart
                </button>
              )}
            </div>
          </Zoom>
        )}
        <div id="footer">
          <div>Game mode:</div>
          {gameMode1 ? (
            <button className="gameModeBtn btnClicked">Facts about me</button>
          ) : (
            <button
              onClick={() => {
                setGameMode1(true);
                setGameMode2(false);
                setGameMode3(false);
              }}
              className="gameModeBtn"
            >
              Facts about me
            </button>
          )}
          {gameMode2 ? (
            <button className="gameModeBtn btnClicked">Life advice</button>
          ) : (
            <button
              onClick={() => {
                setGameMode1(false);
                setGameMode2(true);
                setGameMode3(false);
              }}
              className="gameModeBtn"
            >
              Life advice
            </button>
          )}
          {gameMode3 ? (
            <button className="gameModeBtn btnClicked">
              Pictures of foxes
            </button>
          ) : (
            <button
              onClick={() => {
                setGameMode1(false);
                setGameMode2(false);
                setGameMode3(true);
              }}
              className="gameModeBtn"
            >
              Pictures of foxes
            </button>
          )}

{/* <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              > */}
            <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
            <div id="skipToWebsite">Skip to the actual website...</div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Maze;
