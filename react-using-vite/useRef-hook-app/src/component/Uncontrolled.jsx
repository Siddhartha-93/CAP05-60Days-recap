import { useRef, useState } from "react";

function Uncontrolled() {
    let [text,setText] = useState("")
  let refs = useRef(null);
  function hendelChng() {
    console.log(refs.current.value);// value of input field show in console
    setText(refs.current.value);// useState for show value in dom 
  }
  return (
    <>
      <div style={{ marginTop: "40px", border: "1px solid black", padding: "10px" }}>
        <h4>Uncontrolled input example using useRef! Type here</h4>
        <h4>{text}</h4>
        <input type="text" onChange={hendelChng} ref={refs} />
      </div>
    </>
  );
}
export default Uncontrolled;
