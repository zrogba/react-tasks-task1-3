//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import PropTypes from 'prop-types';
import React from "react";
//import {  Link } from 'react-router-dom';
import '../assets/styles/home.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
       <ul>
  <li><Link to="/Login"className="dropdown-item" >
					 Login</Link></li>
  <li> <Link to="/Register"className="dropdown-item" >
					 Sign up</Link></li>
   
</ul>
      </nav>
    );
  }
  export default Navbar;

 