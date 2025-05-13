import { Link } from "react-router-dom";
import "./Menu.css";
function Menu({ diff, setDiff, theme, setTheme }) {
  return (
    <div className="menu-screen">
      <h1>Matching Card Game</h1>
      <div className="menu-options">
        <div className="play-btn">
          <Link to="/game">Play</Link>
        </div>
        <div className="diff-btn">
          <h3>Select Difficulty</h3>
          <button
            onClick={() => {
              setDiff("Easy");
            }}
            className={diff === "Easy" ? "selected" : ""}
          >
            Easy
          </button>
          <button
            onClick={() => {
              setDiff("Medium");
            }}
            className={diff === "Medium" ? "selected" : ""}
          >
            Medium
          </button>
          <button
            onClick={() => {
              setDiff("Hard");
            }}
            className={diff === "Hard" ? "selected" : ""}
          >
            Hard
          </button>
        </div>
        <div className="diff-btn">
          <h3>Select Theme</h3>
          <button
            onClick={() => {
              setTheme("Fruits");
            }}
            className={theme === "Fruits" ? "selected" : ""}
          >
            Fruits
          </button>
          <button
            onClick={() => {
              setTheme("Tech");
            }}
            className={theme === "Tech" ? "selected" : ""}
          >
            Tech
          </button>
          <button
            onClick={() => {
              setTheme("Animals");
            }}
            className={theme === "Animals" ? "selected" : ""}
          >
            Animals
          </button>
        </div>
        <div className="rules">
          <Link to="/rules">Rules</Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
