//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import PropTypes from 'prop-types';
import {  Link } from 'react-router-dom';
function Navbar() {
    return (
     <nav className='navbar'>
        <div className='container mx-auto'>
            <div className='row'>
            <ul>
            <li>
            <h4><Link to="/Login">or Login</Link></h4>
            </li>
            <li>
            <h4><Link to="/forgot">or forgot password</Link></h4>
            </li>
            <li>
            <h4><Link to="/Register">Register</Link></h4>
            </li>
        </ul>

            </div>
        
        </div>

     </nav>
    );
  }
  export default Navbar;