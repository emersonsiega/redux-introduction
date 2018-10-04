const redux = require('./index')

const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'

/**
 * Reducer function, to update the state
 */
function todos(state = [], action) {
    switch ( action.type ) {
        case ADD_TODO: 
            return state.concat([action.todo])
        case REMOVE_TODO:
            return state.filter( todo => todo.id != action.id )
        case TOGGLE_TODO:
            return state.map( todo => todo.id !== action.id ? todo : 
                Object.assign({}, todo, { complete: !todo.complete }) )
        default:
            return state    
    }
}

const store = redux.createStore(todos)
store.subscribe( () => console.log(`State changed: `, store.getState()) )

store.dispatch({
    type: ADD_TODO,
    todo: {
        id: 0,
        name: 'Learn Redux',
        complete: false
    }
})