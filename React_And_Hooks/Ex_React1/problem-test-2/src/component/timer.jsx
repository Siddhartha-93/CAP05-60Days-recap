import { useEffect, useState } from 'react';
let Timer = () => {
    let [time, setTime] = useState(5);
    let timer;
    function counDown() {
      timer = setInterval(() => {
        setTime(time - 1);
      }, 2000);
      if (time <= 0) {
        clearInterval(timer);
        alert("fail to Subscribe");
      }
    }
  
    useEffect(() => {
      counDown();
      return () => {
        clearInterval(timer);
      }
    }, [time]);
  
    
    return (
      <div>
        <h2>Subscribe in {time}</h2>
      </div>
    );
  };
  export default Timer;