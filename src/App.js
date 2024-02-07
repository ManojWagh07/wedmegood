import logo from './logo.svg';
import './App.css';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginPage from './Comman/LoginPage';

// import "@fortawesome/fontawesome-free/css/all.min.css";
function App() {
  return (
    <div className="App">
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/LoginPage' element={<LoginPage/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
