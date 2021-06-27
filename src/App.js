import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./containers/Login.js";
import Signup from "./containers/Signup.js";
import Profile from "./containers/Profile.js";

import "./App.scss";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
