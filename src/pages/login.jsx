import React from "react";
import { loginUser } from "../firebase/firebase";
import { useState } from "react";
import {  Link } from 'react-router-dom';
import useForm from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import validate from "../validations";
//1.create constant login



const Login = (submitForm) => {
	//3.import usestate snippet and create array of data
	const { errors } = useForm(validate);

	const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  


  const navigate = useNavigate();
  

  const handleEmail = (e)=> {
    setEmail(e.target.value);
	e.preventDefault();
        
    
  };

  const handlePassword = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
	e.preventDefault();
	 
    loginUser(email, password)
      .then((userCredential) => {
		
        alert('User signed in');
        navigate("/home", { replace: true })
      })
      .catch((error) => {
        alert('Something went wrong!');
        const errorCode = error.code;
        console.log(errorCode);
      });
  };
	return (
		
		<>
			<div className="container">
			<div className="card" >
			<h2>Sign in</h2>
				<form action="" onSubmit={ handleSubmit}>
				<div className="form-group">
							<label htmlFor="email">Email address</label>
							<input type={"email"} autoComplete="off" className="form-control" id={"email"}
								aria-describedby="emailHelp" placeholder="Enter email" value={email}
								name="email" onChange={handleEmail} />
							{errors.email && <p className="error">{errors.email}</p>}
						</div>

						<div className="form-group row">
							<label htmlFor="password" className="col-sm-2 col-form-label">Password</label>

							<input type={"password"} autoComplete="off" className="form-control" id="password"
								value={password} placeholder="Password" name="password" onChange={handlePassword} />
							{errors.password && <p className="error">{errors.password}</p>}
						</div>
					<div className="form-check">
    <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
    <label htmlFor="dropdownCheck2" className="form-check-label">
      Remember me
    </label> 
	<span className="seperator">|</span>
	<span className="large-link"><Link to="/Forgot"className="dropdown-item" >Forgot password?</Link></span>
  </div>
					<button type="submit" className="btn" onSubmit={handleSubmit}>Submit</button>
				</form>
				 <div className="dropdown-divider"></div>
				 <span className="large-link"><small>New around here?</small><Link to="/Register"className="dropdown-item" >
					 Sign up</Link>
					</span>

			</div>
		 
			
			</div>
		</>
	)

}
export default Login;