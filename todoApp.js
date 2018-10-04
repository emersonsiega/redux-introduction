const redux = require('./index')

const ADD_TODO = 'ADD_TODO'

/**
 * Reducer function, to update the state
 */
function todos(state = [], action) {
    if (action.type === ADD_TODO) {
        return state.concat([action.todo])
    }
    
    return state
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