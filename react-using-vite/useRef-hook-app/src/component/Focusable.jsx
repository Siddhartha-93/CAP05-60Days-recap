
import { useRef } from "react";
function Focusable() {
 // code from open ai....................
/* const inputRef = useRef(null);
    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, []);
  
    return (
      <input ref={inputRef} type="text" />
    );
};
*/  
// code by me............
  let ref = useRef(true);
  return (
    <>
      <div style={{ marginTop: "40px", border: "1px solid black", padding: "10px" }}>
        <h3>
          Use the useRef hook to focus the input field automatically when the
          component mounts.
        </h3>
        <input type="text" autoFocus={ref} />
        <br />
        <input type="text" />
      </div>
    </>
  );
}
export default Focusable;
