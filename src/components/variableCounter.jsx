import { connect } from "react-redux"
import { increment, decrement } from "../redux/counter/actions"
import { dynamicIncrement, dynamicDecrement } from "../redux/dynamicCounter/actions"

const VariableCounter = ({ count, increment, decrement }) => {
    return <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
}

const mapStateToProps = (state, ownProps) => {
    return {
        count: ownProps.dynamic ? state.dynamicCounter.value : state.counter.value
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increment: ownProps.dynamic ? (value) => dispatch(dynamicIncrement(5)) : (value) => dispatch(increment()),
        decrement: ownProps.dynamic ? (value) => dispatch(dynamicDecrement(2)) : (value) => dispatch(decrement())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VariableCounter);