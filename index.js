// "Library Code"
/**
 * The store should have four parts:
 * 1. The state
 * 2. Get the state
 * 3. Listen to changes on the state
 * 4. Update the state
 * 
 * Rules:
 * 1. Just an event can change the state
 * 2. The function that returns the new state must be a pure function
 */
module.exports = {
    createStore: function(reducer) {
        let state
        let listeners = []

        const getState = () => state

        /**
         * Listen for changes on the state
         */
        const subscribe = (listener) => {
            listeners.push(listener)
            // unsubscribe function
            return () => {
                listeners = listeners.filter(l => l !== listener)
            }
        }

        /**
         * Call action to change state and notify all the listeners
         */
        const dispatch = (action) => {
            state = reducer(state, action)
            listeners.forEach(listener => listener())
        }

        return {
            getState,
            subscribe,
            dispatch
        }
    }
}