import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AllExpenses from "./containers/AllExpenses"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <AllExpenses />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
