import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"


// Components
import NavBar from "./components/NavBar/NavBar.js"


// Views
import Home from "./views/Home/Home"
import Contact from "./views/Contact/Contact"
import ItemDetail from "./views/ItemDetail/ItemDetail"
import Cart from "./views/Cart/Cart"


// Context
import {CartProvider} from "./CartContext"


function App() {
  return (
    <CartProvider>
      <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path= "/" exact component= {Home} />
          <Route path= "/contact" component= {Contact} />h
          <Route exact path= "/detail/:id" component= {ItemDetail} />
          <Route path= "/category/:categoryId">
            <Home /> 
          </Route>
          <Route path= "/cart" component= {Cart} />
        </Switch>
      </Router>
      </div>
    </CartProvider>
  );
}

export default App;
