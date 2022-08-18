import { Provider } from "react-redux";
import store from "./store";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PublicRoutes />
      </div>
    </Provider>
  );
}

export default App;
