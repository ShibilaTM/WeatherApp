
import { Route, Routes } from 'react-router-dom';
import Auth from './ui-components/Auth';
import Main from './Elements/Main';
import Home from './Pages/Home';
import Weather from './Pages/Weather';
import './Pages/Weather.css'
import Navbar from './Elements/Navbar';
function App() {
  return (
    <div>
      <Navbar/>
    <div className='container'>
      <Weather/>
     
     {/* <Routes>
        <Route path='/' element={<Main Children={<Home/>}/>}/>
        <Route path='/auth' element={<Auth/>}/>

     </Routes> */}


    </div>
    </div>
  );
}

export default App;
