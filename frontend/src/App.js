
import { Route, Routes } from 'react-router-dom';
import Auth from './ui-components/Auth';
import Main from './Elements/Main';
import Home from './Pages/Home';

function App() {
  return (
    <div>
     
     <Routes>
        <Route path='/' element={<Main Children={<Home/>}/>}/>
        <Route path='/auth' element={<Auth/>}/>

     </Routes>


    </div>
  );
}

export default App;
