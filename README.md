## Middleware in Redux

Check [Middleware Folder](./src/redux/middlewares/) to see implementation \
Middleware is a curry function

```
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
```
