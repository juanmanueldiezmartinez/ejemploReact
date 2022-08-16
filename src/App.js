import './App.css';
import Personajes from './componentes/Personajes';
import NavBar from './componentes/NavBar';
import Buscador from './componentes/Buscador';
import Main from './componentes/Main';

//importamos los elementos de react-router-dom
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Router>


        <NavBar></NavBar> {/*{/*queremos que el navBar este siempre disponible* -- podemos ponerlo asi <NavBar></NavBar> o <NavBar/> /}*/}

        <Routes>{/*desde aca usamos las rutas para que vaya renderizando distintas partes de la pagina*/}
          
        <Route exact path='/' element={<Main/>}></Route>

        <Route exact path='/personajes' element={<Personajes/>}></Route>
  
        <Route exact path='/buscador' element={<Buscador/>}></Route>
        
        </Routes>

        </Router>
      </header>
    </div>
  );
  }


//  App;
