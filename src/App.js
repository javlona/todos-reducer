import React, { useContext, useState } from 'react';
import Todos from './store/Context'
import './App.css';

function App() {
  const [state, dispatch, submitHandler] = useContext(Todos);
  const [value, setValue] = useState('')
  
  console.log(state)
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input 
          type="text" 
          className="form__input" 
          value={value} 
          onChange={ e => setValue(e.target.value)}
          />
      </form>
    </div>
  );
}

export default App;
