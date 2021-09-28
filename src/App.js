import './App.css';
import NavBar from "./components/NavBar/NavBar.js"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js"


function App() {
  return (
    <div className="App">
      <NavBar brand= "Merchant"/>
      <ItemListContainer greetings= "Bienvenido a mi eCommerce"/>
    </div>
  );
}

export default App;
