const { FETCHTODOS, TODOLOADED, TODOADDED } = require("../async-demo/actionTypes")

const fetchAsyncMiddleware = (store) => (next) => async (action) => {
    if (typeof action === "function") {

        // to stop further execution
        return action(store.dispatch, store.getState);
    }

    return next(action);
}

const delayActionMiddleware = (store) => (next) => (action) => {
    if (action.type === TODOADDED) {
        console.log('I am delaying you!');

        setTimeout(() => {
            next(action);
        }, 2000)

        return; // to stop further execution
    }

    return next(action);
}

module.exports = {
    delayActionMiddleware,
    fetchAsyncMiddleware
}