import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

const Contact_Us = React.lazy(() => import("pages/Contact_Us"));
const Landing = React.lazy(() => import("pages/Landing"));
const PrivacyPolicy = React.lazy(() => import("pages/PrivacyPolicy"));
const Register = React.lazy(() => import("pages/Register"));
const Test = React.lazy(() => import("pages/Test"));

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <React.Suspense fallback={<p>loading....</p>}>
            <Route exact path="/" component={Landing} />
            <Route path="/contact-us" component={Contact_Us} />
            <Route path="/policy-privacy" component={PrivacyPolicy} />

            {/* Test */}
            <Route path="/register" component={Register} />
            <Route path="/test" component={Test} />

            {/* No match */}
            <Route component={() => <Redirect to="/" />} />
          </React.Suspense>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
