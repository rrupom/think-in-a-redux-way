const { createStore, applyMiddleware } = require("redux")
const { TODOADDED, TODOLOADED } = require("./async-demo/actionTypes")
const { todoAdded, todoLoaded, fetchTodo } = require("./async-demo/actions");
const { delayActionMiddleware, fetchTodosMiddleware } = require("./middlewares/todoMiddlewares");


const reducer = require("./async-demo/reducer")

const store = createStore(reducer, applyMiddleware(delayActionMiddleware, fetchTodosMiddleware));

// subscribe to the store
store.subscribe(() => {
    console.log(store.getState());
})

//? dispatching action
// store.dispatch(todoAdded("Learn NodeJS"));

/**
 * ? If we want to load todos from a server, we need to dispatch a fake action. then after loading the data in middleware then we will dispatch actual action from middleware
 */
store.dispatch(fetchTodo());