
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

    </Switch>
   
  </Router>

 
  );
}

export default App;
