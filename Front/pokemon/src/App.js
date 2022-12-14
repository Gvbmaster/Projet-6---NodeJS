import 'bootstrap/dist/css/bootstrap.min.css';
import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";
import Update from "./pages/Update";
import Gestion from './pages/Gestion';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


//App.js
function App(props){
  return <Router>
      <Switch>
        <Route exact path="/"> 
          <Pokemon/> 
        </Route>
        <Route path="/pokedex">
          <Pokedex/>
        </Route>
        <Route path="/gestion">
          <Gestion/>
        </Route>
        <Route path="/update/:id">
          <Update/>
        </Route>
      </Switch>
  </Router>
}
export default App;