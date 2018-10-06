const redux = require('./redux')
const todos = require('./todos')
const goals = require('./goals')

/**
 * Create a root reducer to centralize all reducers
 */
const rootReducer = ( state = {}, action ) => {
    return {
        todos: todos.todosReducer( state.todos, action ),
        goals: goals.goalsReducer( state.goals, action )
    }
}

const store = redux.createStore( rootReducer )
const unsubscribe = store.subscribe( () => console.log( `State changed: \n`, store.getState()) )

store.dispatch(todos.addTodoAction({
    id: 0,
    name: 'Learn Redux',
    complete: false
}))

store.dispatch(todos.addTodoAction({
    id: 1,
    name: 'Be FODA in React',
    complete: false
}))

store.dispatch(todos.addTodoAction({
    id: 2,
    name: 'Learn ES6',
    complete: true
}))

store.dispatch(todos.removeTodoAction(1))

store.dispatch(todos.toggleTodoAction(2))

store.dispatch(goals.addGoalAction({
    id: 0,
    name: 'Learn Redux'
}))

store.dispatch(goals.addGoalAction({
    id: 1,
    name: 'Lose 20 pounds'
}))

store.dispatch(goals.removeGoalAction(0))

unsubscribe()
