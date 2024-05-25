const { TODOADDED, TODOLOADED, FETCHTODOS } = require("./actionTypes")

const todoAdded = (title) => {
    return {
        type: TODOADDED,
        payload: title
    }
}

const todoLoaded = (todos) => {
    return {
        type: TODOLOADED,
        payload: todos
    }
}

const fetchTodo = () => {
    return {
        type: FETCHTODOS
    }
}

module.exports = {
    todoAdded,
    todoLoaded,
    fetchTodo
}