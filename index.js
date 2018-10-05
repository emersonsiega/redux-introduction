const redux = require('./redux')
const todos = require('./todos')
const goals = require('./goals')

/**
 * Create an root reducer to centralize all reducers
 */
const rootReducer = ( state = {}, action ) => {
    return {
        todos: todos.todosReducer( state.todos, action ),
        goals: goals.goalsReducer( state.goals, action )
    }
}

const store = redux.createStore( rootReducer )
const unsubscribe = store.subscribe( () => console.log( `State changed: \n`, store.getState()) )

store.dispatch({
    type: todos.actions.ADD_TODO,
    todo: {
        id: 0,
        name: 'Learn Redux',
        complete: false
    }
})

store.dispatch({
    type: todos.actions.ADD_TODO,
    todo: {
        id: 1,
        name: 'Be FODA in React',
        complete: false
    }
})

store.dispatch({
    type: todos.actions.ADD_TODO,
    todo: {
        id: 2,
        name: 'Learn ES6',
        complete: true
    }
})

store.dispatch({
    type: todos.actions.REMOVE_TODO,
    id: 1
})

store.dispatch({
    type: todos.actions.TOGGLE_TODO,
    id: 2
})

store.dispatch({
    type: goals.actions.ADD_GOAL,
    goal: {
        id: 0,
        name: 'Learn Redux'
    }
})

store.dispatch({
    type: goals.actions.ADD_GOAL,
    goal: {
        id: 1,
        name: 'Lose 20 pounds'
    }
})

store.dispatch({
    type: goals.actions.REMOVE_GOAL,
    id: 0
})

unsubscribe()