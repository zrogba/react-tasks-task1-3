import React from "react";
import {  Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import '../assets/styles/home.css';



const Home = () => {




    return (
		
		<>
		<Navbar/>
			<div>
			
			<Link to="/Register"className="dropdown-item" >
					 Sign up</Link>
					 <Link to="/Login"className="dropdown-item" >
					 Login</Link>
			
			
			</div>
		</>
	)

}
export default Home;