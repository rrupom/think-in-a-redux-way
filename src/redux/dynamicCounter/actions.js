import { DYNAMIC_DECREMENT, DYNAMIC_INCREMENT } from "./actionTypes"

export const dynamicIncrement = (value) => {
    return {
        type: DYNAMIC_INCREMENT,
        payload: value
    }
}

export const dynamicDecrement = (value) => {
    return {
        type: DYNAMIC_DECREMENT,
        payload: value
    }
}