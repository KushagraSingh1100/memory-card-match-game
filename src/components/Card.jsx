import "./Card.css";
import cardBack2 from "../assets/fruits/cardBack0.jpg";
import { useEffect, useState } from "react";
function Card({ handleChoice, card, flipped }) {
  const [flip, setFlip] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFlip(false);
    }, 1000);
  }, []);

  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <div className={flipped || flip ? "flipped" : ""}>
        <img className="front" src={card.src} alt="" />
        <img className="back" onClick={handleClick} src={cardBack2} alt="" />
      </div>
    </div>
  );
}

export default Card;
