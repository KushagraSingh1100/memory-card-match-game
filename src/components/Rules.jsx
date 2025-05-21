import "./Rules.css";
function Rules() {
  return (
    <>
      <title>Matching Card Game - Rules</title>
      <meta
        name="description"
        content="Learn the rules of the Matching Card Game. Flip cards, match pairs, and test your memory!"
      />
      <meta
        name="og:description"
        content="Learn the rules of the Matching Card Game. Flip cards, match pairs, and test your memory!"
      />
      <meta name="og:title" content="Matching Card Game - Rules" />
      <meta
        property="og:url"
        content="https://memory-card-match-game.pages.dev/rules"
      />
      <meta
        property="og:image"
        content="https://memory-card-match-game.pages.dev/rulesPage.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Matching Card Game - Rules" />
      <meta
        name="twitter:description"
        content="Flip cards, match pairs, and challenge your memory in the Matching Card Game."
      />
      <meta
        name="twitter:image"
        content="https://memory-card-match-game.pages.dev/rulesPage.png"
      />
      <link
        rel="canonical"
        href="https://memory-card-match-game.pages.dev/rules"
      />
      <div className="rules-page">
        <h1>Rules!!!</h1>
        <div className="rules">
          <h3>
            Welcome to the Matching Card Game! Test your memory and have fun
            matching pairs.
          </h3>

          <h4>Here's how to play:</h4>
          <p>
            🎮 How to Play Objective: Match all the pairs of cards with the
            fewest number of tries and in the shortest time.
            <br />
            <section>&#x2022;Flip Cards:</section> Click on any two cards to
            flip them over and reveal the images.
            <br />
            <section>&#x2022;Match Pairs:</section> If the two cards match, they
            stay flipped. If not, they flip back after a short delay.
            <br />
            <section>&#x2022;Win the Game:</section> Match all card pairs to
            win. Your score depends on the number of matches, tries, and time
            taken!
          </p>
        </div>
      </div>
    </>
  );
}

export default Rules;
