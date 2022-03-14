export const ADD_TODO = 'addTodos';
export const DELETE_TODO = 'deleteTodos';
export const COMPLETE_TODO = 'updateTodos'

function reducer (state, action){
    switch(action.type){
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_TODO:
            const filtered = state.filter(item => item.id !== action.payload)
            return filtered
        case COMPLETE_TODO:
            const updated = state.map(item => item.id === action.payload.id ? {...item, completed: !item.completed} : item)
            return [...updated]
        default:
            return state
    }
}

export default reducer
