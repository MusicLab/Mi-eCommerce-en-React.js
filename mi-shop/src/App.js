import './App.css';
import NavBar from "./components/NavBar/NavBar.js"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js"
import CartWidget from "./components/CartWidget/CartWidget.js"

function App() {
  return (
    <div className="App">
      <NavBar brand= "Merchant"/>
      <ItemListContainer greetings= "Bienvenido a mi eCommerce"/>
      <CartWidget />
    </div>
  );
}

export default App;
