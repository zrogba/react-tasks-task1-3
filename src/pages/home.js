import React from "react";

import Navbar from '../components/navbar';
import '../assets/styles/home.css';
import { logoutUser } from "../firebase/firebase";



const Home = () => {




    return (
		
		<>
		<Navbar/>
		<h1>Welcome user!</h1>
      <div>
        This is a react form
      </div>
      <button onClick={logoutUser} className="btn">
        Logout
      </button>
    
		</>
	)

}
export default Home;