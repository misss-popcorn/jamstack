import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./containers/Login.js";
import Signup from "./containers/Signup.js";
import Profile from "./containers/Profile.js";
import Dummy from "./containers/Dummy.js";

import "./App.scss";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route
            path={[
              "/incomingEnquiries",
              "/dashboard",
              "/settings",
              "/incomingQuotations",
              "/products",
              "/myRequests",
              "/orderHistory",
            ]}
          >
            <Dummy />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
