import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";  
import Album from './Dashboard/album'
import LogIn from './LogIn-SingUp/login'
import SingUp from './LogIn-SingUp/singup'
import JS from './Dashboard/js/javascript'
import Node from './Dashboard/Node/Node'
import Reacts from './Dashboard/React/React'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <Switch>
            <Route exact path="/login">
              <LogIn/>
            </Route>
            <Route exact path="/singUp">
              <SingUp/>
            </Route>
            <Route exact path="/album">
              <Album/>
            </Route>
            <Route exact path="/js">
              <JS/>
            </Route>
            <Route exact path="/react">
              <Reacts/>
            </Route>
            <Route exact path="/node">
              <Node/>
            </Route>
          </Switch>
          </Router>
      </header>
    </div>
  );
}

export default App;

