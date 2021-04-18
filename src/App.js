import './App.css';
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Components from "./components/Components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/components">
            <Components />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
