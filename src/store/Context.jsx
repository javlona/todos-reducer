import React,{useState, useContext, createContext, useReducer} from 'react'
import reducer from './reducer'
import { ADD_TODO } from './reducer'

const Todos = createContext()

function TodosContext(props) {
    const [state, dispatch] = useReducer(reducer, [])

  return (
    <Todos.Provider value={[
        state,
        dispatch,
    ]}>
        {props.children}
    </Todos.Provider>
  )
}

export default Todos;
export { TodosContext } 