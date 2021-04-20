import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//COMPONENTS
import Navb from './components/Navb/Navb';
import Footer from './components/Footer/Footer';
//VIEWS
import Banner from './components/Banner/Banner';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <Router>
      <div className="App">
        <Navb />
        <Switch>
          <Route path="/" exact>
            <Banner />
            <ItemListContainer greeting="Todos Los Productos" />
          </Route>
          <Route path="/category/:name" exact>
            <ItemListContainer greeting="Todos Los Productos" />
          </Route>
          <Route path="/:name/:id" exact component={ItemDetailContainer} />
          <Route path="/category/:name/:id" exact component={ItemDetailContainer} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
