// import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import  Timer  from "./component/timer";
import  Subscribes  from "./component/subscribes";
function App() {
  let [subscribe, setSubscribe] = useState(false);
  let hendelSubscribe = () => {
    setSubscribe(true);
  };
  

  return (
    <div>
      <h1>Wellcome to React Subscription </h1>
      {subscribe ?<Subscribes />:<Timer />}
      <button onClick={hendelSubscribe}>Subscribe</button>
    </div>
  );
}

export default App;
