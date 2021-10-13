import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

// Components
import NavBar from "./components/NavBar/NavBar.js"
import ItemCount from "./components/ItemCount/ItemCount"

// Views
import Home from "./views/Home/Home"
import Contact from "./views/Contact/Contact"


function App() {
  return (
    <div className="App">
      <Router>
      <NavBar brand= "Merchant"/>
        <ItemCount initial= "1" stock= "10" />
        <Switch>
          <Route path= "/" exact component= {Home}/>
          <Route path= "/contact" component= {Contact}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
