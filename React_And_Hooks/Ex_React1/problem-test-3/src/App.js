import axios from "axios";
import MouseEvents from "./component/mouseEvents";
import UserCard from "./component/userCard";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [users, setUsers] = useState([]);
  let [screen, setScreen] = useState({ x: 0, y: 0 });

  let fetchData = async () => {
    try {
      let req = await axios.get("https://jsonplaceholder.typicode.com/users");
      let res = req.data;
      setUsers(res);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  function hendelMouseMovment(e) {
    setScreen({ x: e.screenX, y: e.screenY });
  }

  return (
    <div className="App" onMouseMove={(e) => hendelMouseMovment(e)}>
      <h1>Display all User list and Mouse Movement </h1>
      <MouseEvents params={screen} />
      <div className="container">
      {users.map((user) => {
        return <UserCard {...user} key={user.id} />;
      })}
      </div>
    </div>
  );
}

export default App;
