import { useState } from "react";
import Menu from "./components/Menu";
import PlayingBoard from "./components/PlayingBoard";
import Rules from "./components/Rules";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [diff, setDiff] = useState("Easy");
  const [theme, setTheme] = useState("Fruits");
  return (
    <Router>
      <Routes>
        <Route exact path="/rules" element={<Rules />} />
      </Routes>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Menu
              diff={diff}
              setDiff={setDiff}
              theme={theme}
              setTheme={setTheme}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/game"
          element={<PlayingBoard theme={theme} difficulty={diff} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
