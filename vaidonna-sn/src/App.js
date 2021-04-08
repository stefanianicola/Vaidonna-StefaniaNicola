import './App.scss';
//COMPONENTS
import Navb from'./components/Navb/Navb';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div className="App">
     <Navb/>
     <ItemListContainer greeting="Destacados" />
    </div>
  );
}

export default App;
