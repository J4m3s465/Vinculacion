import {BrowserRouter, Route, Routes} from 'react-router-dom';
import BarraNav from './components/BarraNav';
import Base from './pages/Base';
import Login from './pages/Login';
import Registro from './pages/Registro';


function App() {
  return (
   <div>
    <BarraNav></BarraNav>
    <Login></Login>
    <BrowserRouter>
    <Routes>
      <Route path='/base' Component={Base}></Route>
      <Route path='/login' Component={Login}></Route>
      <Route path='/registro' Component={Registro}></Route>
    </Routes>
    </BrowserRouter>
   </div>
      
      
  );
}

export default App;
