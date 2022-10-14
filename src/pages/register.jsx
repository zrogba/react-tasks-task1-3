import React from "react";
import '../assets/styles/register.css';
import { Link } from 'react-router-dom';
import useForm from "../hooks/useForm";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import validate from "../validations";
import { useId } from 'react';
import { useState } from "react";
import { registerUser, verifyEmail } from "../firebase/firebase";
//import {auth} from "../firebase/firebase";
import { useNavigate } from "react-router-dom";


const Register = ({ submitForm }) => {
	//useForm hook component 
	const { handleChange, handleSubmit, values, errors } = useForm(validate);

	
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	
	const id = useId();
	
	const navigate = useNavigate();

	const handleEmail = event => {
		setEmail(event.target.value);
	};

	const handlePassword = event => {
		setPassword(event.target.value);
	};


	//Firebase
	try {

		const docRef = addDoc(collection(db, "users"), {
			id: id,
			firstname: values.firstname,
			lastname: values.lastname,
			phone: values.phone,
			email: values.email,
			password: values.password,
		});
		console.log(docRef.users);
	} catch (docRef) {

	}


	const handleRegister = async (e) => {
		e.preventDefault();

		registerUser(email, password)

			.then((userCredential) => {
				
		navigate("/login", { replace: true })
		const user = userCredential.user;
		console.log(userCredential, user);
		verifyEmail();
		alert("Verification Email sent"); 
      })
	  
      .catch((error) => {
        alert(error)
        const errorCode = error.code;
        console.log(errorCode);
      });
  }

	return (
		<>
			<div className="container">
				<h2><Link to="/Home" className="dropdown-item" >
					Home</Link></h2>
				<div className="card" >
					<h2>Create an account</h2>
					<h4><Link to="/Login">or Login</Link></h4>

					<form action="" onSubmit={handleRegister}>
						<div className="form-group">
							<label htmlFor={`${id}-firstname`} >First Name</label>
							<input type="text" autoComplete="off" className="form-control" id={`${id}-firstname`}
								placeholder="First Name" value={values.firstname}
								name="firstname" onChange={handleChange} required />
							{errors.firstname && <p className="error">{errors.firstname}</p>}
						</div>
						<div className="form-group">
							<label htmlFor={`${id}-lastname`}>Last Name</label>
							<input type="text" autoComplete="off" className="form-control" id={`${id}-lastname`}
								placeholder="Last Name" value={values.lastname}
								name="lastname" onChange={handleChange} />
							{errors.lastname && <p className="error">{errors.lastname}</p>}
						</div>
						<div className="form-group">
							<label htmlFor={`${id}-phone`}>Phone Number</label>
							<input type="text" autoComplete="off" className="form-control" id={`${id}-phone`}
								placeholder="Phone" value={values.phone}
								name="phone" onChange={handleChange} />
							{errors.phone && <p className="error">{errors.phone}</p>}
						</div>
						<div className="form-group">
							<label htmlFor={`${id}-email`}>Email address</label>
							<input type={"email"} autoComplete="off" className="form-control" id={`${id}-email`}
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

						<div className="form-group row">
							<label htmlFor="password" className="col-sm-2 col-form-label">Confirm Password</label>

							<input type="password" autoComplete="off" className="form-control" id="confirmPassword"
								value={values.confirmPassword} placeholder="Retype Password" name="confirmPassword" onChange={handleChange} />
							{errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
						</div>

						<button type="submit" className="btn" onSubmit={handleSubmit}>Register</button>

					</form>

				</div>

			</div>

		</>
	)

}

export default Register;

