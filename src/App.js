import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Forgot from './pages/forgot';
import Login from './pages/login';
import Register from './pages/register';
import FormSuccess from './pages/FormSuccess';
import Home from './pages/home';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
  
        <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route path='/home' element={< Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/FormSuccess" element={<FormSuccess />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;