import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


//App.js
function App(props){
  return <Router>
      <Switch>
        <Route exact path="/"> 
          <Home /> 
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
  </Router>
}
export default App;