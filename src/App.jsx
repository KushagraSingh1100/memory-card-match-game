import { useState } from "react";
import Menu from "./components/Menu";
import PlayingBoard from "./components/PlayingBoard";

function App() {
  const [diff, setDiff] = useState("Easy");
  const [theme, setTheme] = useState("Fruits");
  return (
    <>
      <Menu diff={diff} setDiff={setDiff} theme={theme} setTheme={setTheme} />
      <PlayingBoard theme={theme} />
    </>
  );
}

export default App;
