import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counter/actions";

const Counter = () => {
    const count = useSelector((state) => state.value);
    const dispatch = useDispatch();

    const incrementHandler = (value) => {
        dispatch(increment(value))
    }

    const decrementHandler = (value) => {
        dispatch(decrement(value));
    }

    return <div>
        <p>Count: {count}</p>
        <button onClick={() => incrementHandler(10)}>Increment</button>
        <button onClick={() => decrementHandler(5)}>Decrement</button>
    </div>
}

export default Counter;