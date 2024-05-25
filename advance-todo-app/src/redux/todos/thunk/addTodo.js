import { added } from "../actions";

const addTodo = (todoText) => {
    return async (dispatch) => {
        const response = await fetch("http://localhost:3000/todos", {
            method: "POST",
            body: JSON.stringify({
                text: todoText,
                completed: false
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        const todo = await response.json();

        dispatch(addTodo(todo.text));
    }
}

export default addTodo;