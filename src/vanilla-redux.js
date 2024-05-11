const counter1 = document.getElementById("counter-1");
const buttonInc1 = document.getElementById("btn-inc-1");
const buttonDec1 = document.getElementById("btn-dec-1");


const initialState = {
    value: 0
}

const counterReducer = (state = initialState, action) => {
    if (action.type === "increment") {
        return {
            ...state,
            value: state.value + 1
        }
    } else if (action.type === "decrement") {
        return {
            ...state,
            value: state.value - 1
        }
    } else {
        return state;
    }
}

const store = Redux.createStore(counterReducer);

const render = () => {
    const state = store.getState();
    counter1.innerText = state.value.toString();
}

store.subscribe(render);

buttonInc1.addEventListener("click", () => {
    store.dispatch({ type: "increment" })
    console.log("clicked");
})

buttonDec1.addEventListener("click", () => {
    store.dispatch({ type: "decrement" })
})
