import { useContext } from "react";
import { BulbContext } from "../context/BulbContextProvider.jsx";

export default function RightSection() {
  const { isOn, switchOn, switchOff } = useContext(BulbContext);

console.log(isOn);
  return (
    <div className="right-section">
      <p>Right Section ( Bulb ) </p>
      <div className="light-bulb-container">
        <div className={`light-bulb ${isOn ? "on" : "off"}`}></div>
        <button
          onClick={switchOn}
        >
          SWITCH ON
        </button>
        <button
          onClick={switchOff}
        >
          SWITCH OFF
        </button>
      </div>
    </div>
  );
}
