import {BrowserRouter, Route, Routes} from 'react-router-dom';
import BarraNav from './components/BarraNav';
import Inicio from './pages/Inicio';
import Base from './pages/Base';
import Login from './pages/Login';
import Registro from './pages/Registro';


function App() {
  return (
   <div>
    <BarraNav></BarraNav>
    <BrowserRouter>
    <Routes>
      <Route path='/inicio' Component={Inicio}></Route>
      <Route path='/base' Component={Base}></Route>
      <Route path='/login' Component={Login}></Route>
      <Route path='/registro' Component={Registro}></Route>
    </Routes>
    </BrowserRouter>
   </div>
      
      
  );
}

export default App;
