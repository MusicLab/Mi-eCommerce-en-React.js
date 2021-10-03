import './App.css';
import NavBar from "./components/NavBar/NavBar.js"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js"
import ItemCount from "./components/ItemCount/ItemCount"


function App() {
  return (
    <div className="App">
      <NavBar brand= "Merchant"/>
      <ItemCount initial= "1" stock= "10" />
      <ItemListContainer greetings= "Bienvenido a mi eCommerce"/>
    </div>
  );
}

export default App;
