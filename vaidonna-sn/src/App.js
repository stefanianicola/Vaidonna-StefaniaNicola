import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//COMPONENTS
import Navb from './components/Navb/Navb';
import Footer from './components/Footer/Footer';
//VIEWS
import Home from './Views/Home/Home';
import Productos from './Views/Products/Productos';
import DetalleProducto from './Views/DetalleProductos/DetalleProducto';

function App() {

  return (
    <Router>
      <div className="App">
        <Navb />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/productos" exact component={Productos} />
          <Route path="/productos/:id" exact component={DetalleProducto} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
