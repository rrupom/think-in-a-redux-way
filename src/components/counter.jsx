import { connect } from "react-redux";
import { increment, decrement } from "../redux/counter/actions";

const Counter = ({ count, increment, decrement }) => {
    return <div>
        <p>Count : {count}</p>
        <button onClick={() => increment(1)}>Increment</button>
        <button onClick={() => decrement(1)}>Decrement</button>
    </div>
}

// ownProps is the component's own props
const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        count: state.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: (value) => dispatch(increment(value)),
        decrement: (value) => dispatch(decrement(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

/**
 * connect() -> returns a HOC component
 * HOC -> a component that take a component as a parameter and return a new component
 */