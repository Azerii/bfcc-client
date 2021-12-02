import ScrollToTop from "components/ScrollToTop";
import Contact_Us from "pages/Contact_Us";
import Landing from "pages/Landing";
import PrivacyPolicy from "pages/PrivacyPolicy";
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
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/contact-us" component={Contact_Us} />
          <Route path="/policy-privacy" component={PrivacyPolicy} />

          {/* Test */}
          <Route path="/register" component={Register} />
          <Route path="/test" component={Test} />

          {/* No match */}
          <Route component={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
