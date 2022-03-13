export const ADD_TODO = 'addTodos';
export const DELETE_TODO = 'deleteTodos';
export const UPDATE_TODO = 'updateTodos'

function reducer (state, action){
    switch(action.type){
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_TODO:
            const filtered = state.filter(item => item.id !== action.payload)
            return filtered
        case UPDATE_TODO:
            const updated = state.map(item => item.id === action.payload.id ? {...item, ...action.payload} : item)
            return [...updated]
        default:
            return state
    }
}

export default reducer
