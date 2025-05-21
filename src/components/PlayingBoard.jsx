import "./PlayingBoard.css";
import Card from "./Card";
import apple from "../assets/fruits/apple.png";
import avocado from "../assets/fruits/avocado.png";
import banana from "../assets/fruits/banana.png";
import cherry from "../assets/fruits/cherry.png";
import df from "../assets/fruits/dragon-fruit.png";
import gf from "../assets/fruits/grapefruit.png";
import grapes from "../assets/fruits/grapes.png";
import lemon from "../assets/fruits/lemon.png";
import pienapple from "../assets/fruits/pineapple.png";
import watermelon from "../assets/fruits/watermelon.png";
import matchSound from "../assets/success-221935.mp3";
import victory from "../assets/clapping.mp3";
import flipSound from "../assets/flip.mp3";

import c from "../assets/tech/c.png";
import css from "../assets/tech/css.png";
import html from "../assets/tech/html.png";
import java from "../assets/tech/java.png";
import js from "../assets/tech/js.png";
import mongodb from "../assets/tech/mongodb.png";
import node from "../assets/tech/node-js.png";
import python from "../assets/tech/python.png";
import react from "../assets/tech/react.png";
import spring from "../assets/tech/spring-boot.png";

import bee from "../assets/animals/bee.png";
import cow from "../assets/animals/cow.png";
import croco from "../assets/animals/crocodile.png";
import elephant from "../assets/animals/elephant.png";
import fox from "../assets/animals/fox.png";
import happy from "../assets/animals/happy-face.png";
import hi from "../assets/animals/hi.png";
import panda from "../assets/animals/panda.png";
import penguin from "../assets/animals/penguin.png";
import turtle from "../assets/animals/turtle.png";

import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

function PlayingBoard({ theme, difficulty }) {
  const [totalPairs, setTotalPairs] = useState(10);
  const matchAudio = new Audio(matchSound);
  const victoryAudio = new Audio(victory);
  const flip = new Audio(flipSound);
  const [cards, setCards] = useState([]);
  const [won, setwon] = useState(false);
  const [turns, setTurns] = useState(0);
  const [matches, setMatches] = useState(0);
  const [score, setScore] = useState(0);
  const [Choice1, setChoice1] = useState(null);
  const [Choice2, setChoice2] = useState(null);
  const [sec, setSec] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const getGridStyle = () => {
    if (windowWidth <= 768) {
      if (difficulty === "Easy")
        return { display: "grid", gridTemplateColumns: "auto auto" };
      if (difficulty === "Medium")
        return { display: "grid", gridTemplateColumns: "auto auto auto auto" };
      if (difficulty === "Hard")
        return { display: "grid", gridTemplateColumns: "auto auto auto auto" };
    }
    if (windowWidth <= 1024) {
      if (difficulty === "Easy")
        return { display: "grid", gridTemplateColumns: "auto auto" };
      if (difficulty === "Medium")
        return { display: "grid", gridTemplateColumns: "auto auto auto auto" };
      if (difficulty === "Hard")
        return { display: "grid", gridTemplateColumns: "auto auto auto auto" };
    }
    if (difficulty === "Easy")
      return { display: "grid", gridTemplateColumns: "auto auto auto" };
    if (difficulty === "Medium")
      return { display: "grid", gridTemplateColumns: "auto auto auto auto" };
    if (difficulty === "Hard")
      return {
        display: "grid",
        gridTemplateColumns: "auto auto auto auto auto",
      };
  };

  const fruitImages = [
    { src: apple, matched: false },
    { src: avocado, matched: false },
    { src: banana, matched: false },
    { src: cherry, matched: false },
    { src: df, matched: false },
    { src: gf, matched: false },
    { src: grapes, matched: false },
    { src: lemon, matched: false },
    { src: pienapple, matched: false },
    { src: watermelon, matched: false },
  ];

  const techImages = [
    { src: c, matched: false },
    { src: css, matched: false },
    { src: html, matched: false },
    { src: java, matched: false },
    { src: js, matched: false },
    { src: mongodb, matched: false },
    { src: node, matched: false },
    { src: python, matched: false },
    { src: react, matched: false },
    { src: spring, matched: false },
  ];

  const animalsImages = [
    { src: bee, matched: false },
    { src: cow, matched: false },
    { src: croco, matched: false },
    { src: elephant, matched: false },
    { src: fox, matched: false },
    { src: happy, matched: false },
    { src: hi, matched: false },
    { src: panda, matched: false },
    { src: penguin, matched: false },
    { src: turtle, matched: false },
  ];

  const handleChoice = (card) => {
    flip.play();
    Choice1 ? setChoice2(card) : setChoice1(card);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    let timer;

    if (timerActive && !won) {
      timer = setInterval(() => {
        setSec((prev) => prev + 1);
      }, 1000);
    }

    if (won || !timerActive) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [timerActive, won]);

  useEffect(() => {
    if (!localStorage.getItem("highScore")) {
      localStorage.setItem("highScore", 0);
    }

    if (Choice1 && Choice2) {
      if (Choice1.src === Choice2.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === Choice1.src) {
              setMatches(matches + 1);
              matchAudio.play();
              setScore(matches * 10 - (turns - matches) * 2);
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurns();
      } else {
        setTimeout(() => {
          setScore(matches * 10 - (turns - matches) * 2);
          resetTurns();
        }, 500);
      }
    }
    if (matches === totalPairs) {
      setwon(true);
      if (score > parseInt(localStorage.getItem("highScore") || "0", 10)) {
        localStorage.setItem("highScore", score);
      }
      setTimeout(() => {
        victoryAudio.play();
      }, 500);
    }
  }, [Choice1, Choice2, matches, localStorage.getItem("highScore")]);

  const resetTurns = () => {
    setChoice1(null);
    setChoice2(null);
    setTurns(turns + 1);
  };

  const shuffelCards = () => {
    let images;
    if (theme === "Fruits") {
      images = fruitImages;
    } else if (theme === "Tech") {
      images = techImages;
    } else {
      images = animalsImages;
    }

    if (difficulty === "Easy") {
      setTotalPairs(3);
      images = images.slice(0, 3);
    } else if (difficulty === "Medium") {
      setTotalPairs(8);
      images = images.slice(0, 8);
    } else {
      setTotalPairs(10);
      images = images.slice(0, 10);
    }
    const shuffled = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffled);
    setSec(0);
    setTimerActive(true);
    setTurns(0);
    setMatches(0);
    setScore(0);
    setwon(false);
    setTimerActive(true);
  };

  return (
    <div className="playing-board">
      <title>Card Game – Flip, Match & Win!</title>
      <meta
        name="description"
        content="Challenge your memory on the playing board! Flip cards, match pairs, and race against time to complete the game with the fewest moves.
"
      />
      <meta
        name="og:description"
        content="Challenge your memory on the playing board! Flip cards, match pairs, and race against time to complete the game with the fewest moves.
"
      />
      <meta
        property="og:image"
        content="https://memory-card-match-game.vercel.app/playPage.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Play Matching Card Game – Flip, Match & Win!"
      />
      <meta
        name="twitter:description"
        content="Challenge your memory on the playing board! Flip cards, match pairs, and race against time to complete the game with the fewest moves.
"
      />
      <meta
        name="twitter:image"
        content="https://memory-card-match-game.vercel.app/playPage.png"
      />
      <div className="game-heading">
        <h1>Matching Card Game</h1>
      </div>
      <div className="newgame-btn">
        <button onClick={shuffelCards}>New Game</button>
        <h3>Time: {sec} seconds</h3>
      </div>
      {!won ? (
        <div className="cards" style={getGridStyle()}>
          {(cards.length === 20 || cards.length === 16 || cards.length === 6) &&
            cards.map((card) => (
              <Card
                key={card.id}
                handleChoice={handleChoice}
                card={card}
                flipped={
                  card === Choice1 || card === Choice2 || card.matched === true
                }
              />
            ))}
        </div>
      ) : (
        <>
          <div className="score-board">
            <h3>Tries: {turns}</h3>
            <h3>Matches: {matches}</h3>
            <h3>Score: {score}</h3>
            <h3>High Score: {localStorage.getItem("highScore")}</h3>
            <h3></h3>
          </div>
          <ReactConfetti />
        </>
      )}
    </div>
  );
}

export default PlayingBoard;
