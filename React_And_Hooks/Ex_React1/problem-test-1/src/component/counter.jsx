import React from "react";
let Counter = () => {
    let [count, setCount] = React.useState(0);
    return (
      <div > 
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Add
        </button>
        <button onClick={() => setCount(count - 1)}>Subtract</button>
      </div>
    );
  };

  export default Counter