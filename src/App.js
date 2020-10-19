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
      <div
        style={{ marginTop: "150vh", marginBottom: "20vh" }}
        ref={refToScroll}
      >
        I wanna be seen
      </div>
      <button onClick={smoothScrollToTop}>Go UP</button>
    </div>
  );
}

export default App;
