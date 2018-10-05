const actions = {
    ADD_GOAL    : 'ADD_GOAL',
    REMOVE_GOAL : 'REMOVE_GOAL'
}

const goalsReducer = ( state = [], action ) => {
    switch ( action.type ) {
        case actions.ADD_GOAL : 
            return state.concat( [action.goal] )
        case actions.REMOVE_GOAL :
            return state.filter( g => g.id !== action.id )
        default :
            return state
    }
}

module.exports = {
    actions,
    goalsReducer
}