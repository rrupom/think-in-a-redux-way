const fetch = require("node-fetch");
const { TODOLOADED } = require("./async-demo/actionTypes");

//* this is a thunk function which function delays execution

const fetchTodos = async (dispatch, getState) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");

    const todos = await response.json();

    dispatch({
        type: TODOLOADED,
        payload: todos
    })

    console.log(`Number of updated todos: ${getState().todos.length}`);

}

module.exports = {
    fetchTodos
}