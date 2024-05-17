import { useState } from "react";
import { useRef } from "react";

function DynamicFocus() {
  let inputRef = useRef({
    inputfld1 : "",
    inputfld2 : "",
    inputfld3 : ""
  });
  let [count, setCount] = useState(0);
  function hendelClick(i) {
    // count < 2 ? setCount(count + 1) : setCount(0);
    // inputRef.current[i].focus();
    console.log(inputRef.current.inputfld1);
  console.log(i);
  }
  return (
    <>
      <div>
        <div style={{ margin: "20px" }}
        onClick={(ele) => hendelClick(ele)}>
          <label htmlFor="inputFld1" >
            Input Fild 1
          </label>
          <input
            name="inputfld1"
            type="text"
            ref = {inputRef}
          />
        </div>
        <div style={{ margin: "20px" }}>
          <label htmlFor="inputFld2" onClick={() => hendelClick(count)}>
            Input Fild 2
          </label>
          <input
            name="inputfld2"
            type="text"
            ref={(el) => (inputRef.current[1] = el)}
          />
        </div>
        <div style={{ margin: "20px" }}>
          <label htmlFor="inputFld3" onClick={(i) => hendelClick(i)}>
            Input Fild 3
          </label>
          <input
            name="inputfld3"
            type="text"
            ref={(el) => (inputRef.current[2] = el)}
          />
        </div>
      </div>
    </>
  );
}
export default DynamicFocus;
