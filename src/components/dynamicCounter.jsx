import { useDispatch, useSelector } from "react-redux"
import { dynamicDecrement, dynamicIncrement } from "../redux/dynamicCounter/actions";

const DynamicCounter = () => {
    const count = useSelector((state) => state.dynamicCounter.value);

    const dispatch = useDispatch();

    const incrementHandler = (value) => {
        dispatch(dynamicIncrement(value));
    }

    const decrementHandler = (value) => {
        dispatch(dynamicDecrement(value));
    }

    return <div>
        <p>Count : {count}</p>
        <button onClick={() => incrementHandler(5)}>Increment</button>
        <button onClick={() => decrementHandler(2)}>Decrement</button>
    </div>
}

export default DynamicCounter