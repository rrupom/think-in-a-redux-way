## Use of redux-devtools

- install redux-devtools-extensions

```
npm i redux-devtools-extension --force
```

- modify createStore()

```
import { composeWithDevTools } from "redux-devtools-extension"

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(myLogger, logger)));
```
