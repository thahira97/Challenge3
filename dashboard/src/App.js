
import CreateProject from './CreateProject';
import Dashboard from './Dashboard';
import MainNavigation from './MainNavigation';
import Project from './Project';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
  <Router>
    <MainNavigation></MainNavigation>
    <Switch>
      <Route path="/" exact>
          <Dashboard></Dashboard>
      </Route>
     <Route path="/create/project" exact>
          <Project></Project>
     </Route>
     <Route path="/create/project/1" exact>
        <CreateProject></CreateProject>
     </Route>
    </Switch>
   
  </Router>

 
  );
}

export default App;
