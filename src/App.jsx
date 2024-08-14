import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Base from './pages/Base';
import Login from './pages/Login';
import BarraNav from './components/BarraNav';


function App() {
  return (
   <div>
    <BarraNav></BarraNav>
    <BrowserRouter>
    <Routes>
      <Route path='/login' Component={Login}></Route>
      <Route path='/base' Component={Base}></Route>
    </Routes>
    </BrowserRouter>
   </div>
      
      
  );
}

export default App;
