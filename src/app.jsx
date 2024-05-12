import { Provider } from "react-redux";
import store from "./redux/store";
import Counter from "./components/counter";
import DynamicCounter from "./components/dynamicCounter";
import VariableCounter from "./components/variableCounter";

const App = () => {
  return <Provider store={store}>
    <div>
      <h1>Simple Counter Application</h1>
      <Counter />
      <DynamicCounter />
      <VariableCounter />
      <VariableCounter dynamic />
    </div>
  </Provider>
}

export default App;    