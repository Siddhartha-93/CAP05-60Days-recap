import { useRef, useState } from "react";

function DomEvent() {
  const ref = useRef(null);
  const [color, setColor] = useState(false);
  function hendelClick() {
    setColor(!color);
    ref.current.style = "background-color: " + (color ? "white" : "red");
    console.log(ref);
  }
  return (
    <>
      <div style={{ marginTop: "40px", border: "1px solid black" }}>
        <h3 onClick={hendelClick} ref={ref}>
          This is useRef hook example to change the background color of the
          element when it is clicked.
          <br />
          CLICK HERE
        </h3>
      </div>
    </>
  );
}
export default DomEvent;
