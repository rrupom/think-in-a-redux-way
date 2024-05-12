import Counter from "./components/counter";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return <Provider store={store}>
    <div>
      <h1>Simple Counter Application</h1>
      <Counter id="1" />
    </div>
  </Provider>
}

export default App;    