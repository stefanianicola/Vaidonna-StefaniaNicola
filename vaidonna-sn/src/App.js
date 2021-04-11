import {useState} from 'react';
import './App.scss';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//COMPONENTS
import Navb from './components/Navb/Navb';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Banner from './components/Banner/Banner';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  const [flag, setFlag] = useState(true);

  const handleDescription = ()=>{
    setFlag(!flag);
  }

  return (
    <div className="App">
       <Button variant="primary" onClick={handleDescription}>
         {
           flag 
           ? "Mostrar descripciones"
           : "Volver al inicio"
         }
       </Button>
      <Navb />
      {
        flag ? (
          (
            <div>
              <Banner />
              <ItemListContainer greeting="Destacados" />
            </div>
          )
        ) : <ItemDetailContainer />
      }
    </div>
  );
}

export default App;
