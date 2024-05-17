import { useState } from "react";
import "./Todo.css"
function Todo() {
  let [todo, setTodo] = useState("");
  let [todoList, setTodoList] = useState([]);

  function hendelchng(e) {
    setTodo(e.target.value);
  }

  function hendelClick() {
    setTodoList([...todoList, todo]);
    setTodo("");
  }
  return (
    <>
      <div className="hed" >
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Enter Todo"
          onChange={hendelchng}
          name="todos"
          value={todo}
        />
        <button onClick={hendelClick}>Add</button>
      </div>
      <div>
        {todoList.map((ele, id) => {
          return (
            <div className="todoLists" key={id}>
              <h3>{ele}</h3>
              <button onClick={() => setTodoList(todoList.filter((e) => e !== ele))}>dlt</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Todo;
