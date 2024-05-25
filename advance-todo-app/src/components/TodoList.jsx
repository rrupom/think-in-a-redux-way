import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { useEffect } from "react";
import fetchTodos from "../redux/todos/thunk/fetchTodos";

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const filters = useSelector((state) => state.filters);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos);
    }, [dispatch]);


    // filter by status
    const filterByStatus = (todo) => {
        const { status } = filters;
        switch (status) {
            case 'Complete':
                return todo.completed;
            case 'Incomplete':
                return !todo.completed
            default:
                return true;
        }
    }

    // filter by colors
    const filterByColor = (todo) => {
        const { colors } = filters;
        if (colors.length > 0) {
            return colors.includes(todo?.color)
        } else {
            return true;
        }
    }

    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {
                todos
                    .filter(filterByStatus)
                    .filter(filterByColor)
                    .map((todo) => (
                        <Todo todo={todo} key={todo.id} />
                    ))
            }
        </div>
    );
}

export default TodoList;