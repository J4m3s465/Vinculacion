import {BrowserRouter, Route, Routes} from 'react-router-dom';
import BarraNav from './components/BarraNav';
import Inicio from './pages/Inicio';
import Base from './pages/Base';
import Login from './pages/Login';


function App() {
  return (
   <div>
    <BarraNav></BarraNav>
    <BrowserRouter>
    <Routes>
      <Route path='/inicio' Component={Inicio}></Route>
      <Route path='/base' Component={Base}></Route>
      <Route path='/login' Component={Login}></Route>
    </Routes>
    </BrowserRouter>
   </div>
      
      
  );
}

export default App;
