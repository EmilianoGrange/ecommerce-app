import NavBar from './components/NavBar';
/* import ItemListContainer from "./containers/ItemListContainer"; */
import ItemDetailContainer from "./containers/ItemDetailContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ItemListContainer greeting="Bienvenidos a la pañalera" /> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;