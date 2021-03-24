import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'jquery/dist/jquery.slim';
import 'popper.js/dist/popper.js';

function App() {
  return (
    <div className="App container-fluid">
      
      <nav className="navbar navbar-expand-md navbar-light">
        <a className="navbar-brand" href="./">Vaidonna</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="./">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./">Productos</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="./" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Productos
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="./">Perros</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="./">Gatos</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="./">Otros</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default App;
