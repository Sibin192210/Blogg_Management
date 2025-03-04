import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Components/User/Login';
import Signup from './Components/User/Signup';
import Homepage from './Components/Homepage/Homepage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/Signup' element={<Signup/>} />
        <Route path='/Login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
