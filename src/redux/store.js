const { createStore, applyMiddleware } = require("redux")

const { fetchTodos } = require("./thunkFunctions");
const thunk = require("redux-thunk");


const reducer = require("./async-demo/reducer")

//! Download redux-thunk@2.4.1 for smooth experience
const store = createStore(reducer, applyMiddleware(thunk.default));

// subscribe to the store
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(fetchTodos);