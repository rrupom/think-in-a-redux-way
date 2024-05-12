// normal function
const multiply = (a, b, c) => {
    return a * b * c;
}


// curry function
// curry function receives only one parameter
const curridMultiply = (a) => {
    return (b) => {
        return (c) => {
            return a * b * c
        }
    }
}