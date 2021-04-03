import './App.scss';
//COMPONENTS
import Navb from'./components/Navb/Navb';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <div className="App">
     <Navb/>
     <ItemListContainer greeting="SOY UN SALUDO" />
     <ItemCount />
    </div>
  );
}

export default App;
