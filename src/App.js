import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Forgot from './components/forms/forgot/forgot';
import Login from './components/forms/login/login';
import Register from './components/forms/register/register';
import FormSuccess from './components/forms/register/FormSuccess';
import Home from './home';


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