import "./Card.css";
import cardBack2 from "../assets/fruits/cardBack0.jpg";
import { useEffect, useState } from "react";
import ParticleEffect from "./ParticleEffect";

function Card({ handleChoice, card, flipped }) {
  const [flip, setFlip] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFlip(false);
    }, 500);
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
      {card.matched && <ParticleEffect id={`particles-${card.id}`} />}
    </div>
  );
}

export default Card;
