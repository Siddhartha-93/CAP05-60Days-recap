import { useRef } from "react";

function FromHendel() {
    let fromHendel = useRef(null)
    console.log(fromHendel.current.value)
    if (fromHendel.current.value.length) {
    }

    return (
        <div>
            <input type="text" ref={fromHendel} placeholder="Enter Your Name" />
        </div>
    );
}
export default FromHendel