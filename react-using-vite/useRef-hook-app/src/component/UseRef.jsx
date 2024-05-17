import { useRef, useState } from "react";
function UseRef() {
    let [count, setCount] = useState(0)
    let ref = useRef(0)
    let hendelClick = () => {
        setCount(count + 1)
        ref.current = count
    }
    console.log(ref,"render count",count);
    return<>
    <div>
        <span>uesRef Count After render every time <h1>{ref.current}</h1> </span>
    </div>
    <div>
        <span>State counter par Click <h1> {count}</h1></span>
        <button onClick={hendelClick}>increment</button>
    </div>
    </>
}
export default UseRef