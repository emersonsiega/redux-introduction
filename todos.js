const actions = {
    ADD_TODO    : 'ADD_TODO',
    REMOVE_TODO : 'REMOVE_TODO',
    TOGGLE_TODO : 'TOGGLE_TODO'
}

const todosReducer = ( state = [], action ) => {
    switch ( action.type ) {
        case actions.ADD_TODO : 
            return state.concat([action.todo])
        case actions.REMOVE_TODO :
            return state.filter( todo => todo.id !== action.id )
        case actions.TOGGLE_TODO :
            return state.map( todo => todo.id !== action.id ? todo : 
                Object.assign({}, todo, { complete: !todo.complete }) )
        default :
            return state    
    }
}

module.exports = {
    actions,
    todosReducer
}