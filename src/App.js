import React from "react";
import "./App.css";
import useSmoothScroll from "./hooks/useSmoothScroll";
import useDocTitle from "./hooks/useDocTitle";

function App() {
  const [refToScroll, smoothScroll] = useSmoothScroll();
  const [topRef, smoothScrollToTop] = useSmoothScroll();

  const [docTitle, setDocTitle] = useDocTitle("test");

  return (
    <div className="App">
      <button ref={topRef} onClick={smoothScroll}>
        Scroll
      </button>
      <button onClick={() => setDocTitle("start")}>Change doc title</button>
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
