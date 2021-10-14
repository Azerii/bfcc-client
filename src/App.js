import Register from "pages/Register";
import Test from "pages/Test";
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/register" />} />
          <Route path="/register" component={Register} />
          <Route path="/test" component={Test} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
