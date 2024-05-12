import { Provider } from "react-redux";
import store from "./redux/store";
import Counter from "./components/counter";
import DynamicCounter from "./components/dynamicCounter";

const App = () => {
  return <Provider store={store}>
    <div>
      <h1>Simple Counter Application</h1>
      <Counter />
      <DynamicCounter />
    </div>
  </Provider>
}

export default App;    