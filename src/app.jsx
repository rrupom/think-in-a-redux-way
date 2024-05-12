import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCounter from "./components/hooksCounter"

const App = () => {
  return <Provider store={store}>
    <div>
      <h1>Simple Counter Application</h1>
      <HooksCounter id="1" />
    </div>
  </Provider>
}

export default App;    