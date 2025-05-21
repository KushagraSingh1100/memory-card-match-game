import { Link } from "react-router-dom";
import "./Menu.css";
function Menu({ diff, setDiff, theme, setTheme }) {
  return (
    <div className="menu-screen">
      <title>Matching Card Game – Main Menu</title>
      <meta
        name="description"
        content="Welcome to the Matching Card Game! Choose to play, view rules, or track your progress from the main menu and get ready to challenge your memory."
      />
      <meta
        name="og:description"
        content="Welcome to the Matching Card Game! Choose to play, view rules, or track your progress from the main menu and get ready to challenge your memory.

"
      />
      <meta property="og:image" content="http://localhost:5173/menu.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Matching Card Game – Main Menu
"
      />
      <meta
        name="twitter:description"
        content="Welcome to the Matching Card Game! Choose to play, view rules, or track your progress from the main menu and get ready to challenge your memory.

"
      />
      <meta name="twitter:image" content="http://localhost:5173/menu.png" />
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
        <div className="rules-btn">
          <Link to="/rules">Rules</Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
