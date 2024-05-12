import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counter/actions";

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch(increment())
    }

    const decrementHandler = () => {
        dispatch(decrement());
    }

    return <div>
        <p>Count: {count}</p>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
    </div>
}

export default Counter;