import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

// Components
import NavBar from "./components/NavBar/NavBar.js"


// Views
import Home from "./views/Home/Home"
import Contact from "./views/Contact/Contact"
import ItemDetail from "./views/ItemDetail/ItemDetail"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
     <Router>
      <NavBar brand= "Merchant"/>
      <Switch>
        <Route path= "/" exact component= {Home} />
        <Route path= "/contact" component= {Contact} />
        <Route exact path= "/detail/:id" component= {ItemDetail} />
        <Route path= "/category/:categoryId">
          <ItemListContainer/> 
        </Route>
      </Switch>
     </Router>
    </div>
  );
}

export default App;
