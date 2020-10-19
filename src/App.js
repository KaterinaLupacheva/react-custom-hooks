import React from "react";
import "./App.css";
import useSmoothScroll from "./hooks/useSmoothScroll";

function App() {
  const [refToScroll, smoothScroll] = useSmoothScroll();
  return (
    <div className="App">
      <button onClick={smoothScroll}>Scroll</button>
      <div
        style={{ marginTop: "150vh", marginBottom: "20vh" }}
        ref={refToScroll}
      >
        I wanna be seen
      </div>
    </div>
  );
}

export default App;
