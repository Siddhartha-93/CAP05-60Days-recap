// src/components/Stopwatch.jsx

import { useState, useEffect } from "react";

function StopWatch() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    /*Complete the missing code*/
    const invlId = setInterval(() => {
      setCount (prevCount => prevCount + 1)
    }, 1000)
    if (count === 10) {clearInterval(invlId)}
    // console.log("intervelId", invlId);// this will print memory leakage.
    return (() => clearInterval(invlId))
  }, [count]);

  return (
    <div style={{ border: "1px dashed red", padding: "10px", margin: "10px" }}>
      <h1>Stop Watch</h1>
      <h4>{count}</h4>
    </div>
  );
}

export default StopWatch;
