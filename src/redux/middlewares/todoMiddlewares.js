const fetch = require("node-fetch");
const { FETCHTODOS, TODOLOADED, TODOADDED } = require("../async-demo/actionTypes")

const fetchTodosMiddleware = (store) => (next) => async (action) => {
    if (action.type === FETCHTODOS) {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");

        const todos = await response.json();

        store.dispatch({
            type: TODOLOADED,
            payload: todos
        })

        console.log(`Number of updated todos: ${store.getState().todos.length}`);

        return; // to stop further execution
    }

    return next(action);
}

const delayActionMiddleware = (store) => (next) => (action) => {
    if (action.type === TODOADDED) {
        console.log('I am delaying you!');

        setTimeout(() => {
            next(action);
        }, 2000)

        return; // to stop further execution
    }

    return next(action);
}

module.exports = {
    delayActionMiddleware,
    fetchTodosMiddleware
}