import "./Rules.css";
function Rules() {
  return (
    <div className="rules-page">
      <h1>Rules!!!</h1>
      <div className="rules">
        <h3>
          Welcome to the Matching Card Game! Test your memory and have fun
          matching pairs.
        </h3>

        <p>
        <h4>Here's how to play:</h4>
          🎮 How to Play Objective: Match all the pairs of cards with the fewest
          number of tries and in the shortest time.
          <br />
          <section>&#x2022;Flip Cards:</section> Click on any two cards to flip them over and reveal the
          images.
          <br />
          <section>&#x2022;Match Pairs:</section> If the two cards match, they stay flipped. If not, they
          flip back after a short delay.
          <br />
          <section>&#x2022;Win the Game:</section> Match all card pairs to win. Your score depends on the
          number of matches, tries, and time taken!
        </p>
      </div>
    </div>
  );
}

export default Rules;
