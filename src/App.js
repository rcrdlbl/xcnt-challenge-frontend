import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import AllExpenses from "./containers/AllExpenses";
import EmployeeExpensesContainer from "./containers/EmployeeExpensesContainer";

const client = new ApolloClient({
  uri: "http://localhost:3050/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/employee/:id" component={EmployeeExpensesContainer} />
          <Route path="/">
            <AllExpenses />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
