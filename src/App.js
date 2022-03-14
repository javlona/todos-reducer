import React, { useContext, useState } from "react";
import Todos from "./store/Context";
import "./App.css";
import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from "./store/reducer";
import ShowTodos from "./Components/ShowTodos";

function App() {
  const [state, dispatch] = useContext(Todos);
  const [value, setValue] = useState("");
  const [hasError, setHasError] = useState(false)

  const newTodo = (name) => {
      return {
        id: Date.now(),
        name,
        completed: false,
      };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if(value.length) {
      setHasError(false)
      dispatch({
        type: ADD_TODO,
        payload: newTodo(value),
      });
      setValue("");
    } else {
      setHasError(true);
    }
  };

  return (
    <div className="App">
      <h3>TODO APP</h3>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="form__input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {
          hasError && <p style={{color: 'red'}}>Please write something</p>
        }
      </form>
      {state?.map((item) => (
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
