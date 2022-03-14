import React, { useContext, useState } from "react";
import Todos from "./store/Context";
import "./App.css";
import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from "./store/reducer";
import ShowTodos from "./Components/ShowTodos";

function App() {
  const [state, dispatch] = useContext(Todos);
  const [value, setValue] = useState("");

  const newTodo = (name) => {
    return {
      id: Date.now(),
      name,
      completed: false,
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_TODO,
      payload: newTodo(value),
    });
    setValue("");
  };

  console.log(value);
  console.log("state", state);
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="form__input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      {state.map((item) => (
        <ShowTodos 
          key={item.id} 
          todo={item} 
          completed={() => dispatch({
            type: COMPLETE_TODO, 
            payload: item
          })}
          deleteHandler={() => dispatch({
            type: DELETE_TODO,
            payload: item.id
          })}
        />
      ))}
    </div>
  );
}

export default App;
