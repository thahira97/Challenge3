import CreateProject from "./CreateProject";
import Dashboard from "./Dashboard";
import MainNavigation from "./MainNavigation";
import Project from "./Project";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
// import { InputContextProvider } from "./store/input-context";
import { useState } from "react";

function App() {

  return (
    <Router>

        {/* <MainNavigation></MainNavigation> */}
        <Switch>
          {/* <Route path="/" exact>
            <Dashboard></Dashboard>
          </Route>
          <Route path="/create/project" exact>
            <Project></Project>
          </Route>
          <Route path="/create/project/1" exact>
            <CreateProject></CreateProject>
          </Route> */}
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/create/project" component={withRouter(Project)} />
        <Route exact path="/create/project/1" component={withRouter(CreateProject)} />
        </Switch>

    </Router>
  );
}

export default App;
