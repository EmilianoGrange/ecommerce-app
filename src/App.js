import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from './components/Cart';
import Mi404 from './components/Mi404';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <ItemListContainer greeting='Bienvenidos a la pañalera' />
          </Route>
          <Route path='/category/:id'>
            <ItemListContainer greeting='Bienvenidos a la pañalera' />
          </Route>
          <Route path='/item/:id' component={ItemDetailContainer}/>
          <Route path='/cart' component={Cart}/>
          <Route path='*' component={Mi404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;