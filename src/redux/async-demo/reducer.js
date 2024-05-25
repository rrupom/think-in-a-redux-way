const { TODOADDED, TODOLOADED } = require("./actionTypes")
const initialState = require("./initialState");


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TODOADDED:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        title: action.payload
                    }
                ]
            }
        case TODOLOADED:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    ...action.payload
                ]
            }
        default:
            return state;
    }
}

module.exports = reducer;