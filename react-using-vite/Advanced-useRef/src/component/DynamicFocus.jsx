import { useState } from "react";
import { useRef } from "react";

function DynamicFocus() {
  let inputRef = useRef({
    inputfld1 : "",
    inputfld2 : "",
    inputfld3 : ""
  });
  function hendelClick(i) {
    inputRef.current[i].focus();

  }
  return (
    <>
      <div>
        <div style={{ margin: "20px" }}>
          <label htmlFor="inputFld1" >
            Input Fild 1
          </label>
          <input
            name="inputfld1"
            type="text"
            ref={(el) => (inputRef.current[0] = el)}
          />
        </div>

        <div style={{ margin: "20px" }}>
          <label htmlFor="inputFld2" >
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
        <button  onClick={(ele) => hendelClick(ele)}>change Field</button>
      </div>
    </>
  );
}
export default DynamicFocus;
