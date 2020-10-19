import React from "react";
import "./App.css";
import useSmoothScroll from "./hooks/useSmoothScroll";

function App() {
  const [refToScroll, smoothScroll] = useSmoothScroll();
  const [topRef, smoothScrollToTop] = useSmoothScroll();
  return (
    <div className="App">
      <button ref={topRef} onClick={smoothScroll}>
        Scroll
      </button>
      <div style={{ marginTop: "150vh" }} ref={refToScroll}>
        I wanna be seen
      </div>
      <button onClick={smoothScrollToTop} style={{ margin: "20vh" }}>
        Go UP
      </button>
    </div>
  );
}

export default App;
