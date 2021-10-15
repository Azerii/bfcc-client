import Register from "pages/Register";
import Test from "pages/Test";
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div className="App">
            <Switch>
              <Route
                exact
                path="/"
                component={() => <Redirect to="/register" />}
              />
              <Route path="/register" component={Register} />
              <Route path="/test" component={Test} />
            </Switch>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
