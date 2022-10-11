import { useState, useEffect } from "react";
import validate from "../validations";
import { useNavigate } from "react-router-dom";
import '../assets/styles/home.css';
import { registerUser } from "../firebase/firebase";



const useForm = () => {
    const [values, setValues] = useState({

        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
    })


    const navigate = useNavigate();
    //10.set the usestate for errors
    const [errors, setErrors] = useState({});
    //11.set the usestate for correct data input
    const [dataCorrect, setDataCorrect] = useState(false);

    const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const id = e.target.id;

        e.preventDefault();
        console.log(id, value);
        setValues({ ...values, [name]: value })
        setEmail(e.target.value);
        setPassword(e.target.value);

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors(validate(values));
        setDataCorrect(true);

    }

    const handleRegister = () => {
        registerUser(email, password)
          .then((userCredential) => {
            alert('User created successfully!')
          })
          .catch((error) => {
            alert('Something went wrong!')
            const errorCode = error.code;
            console.log(errorCode);
          });
      }

    useEffect(
        () => {

            if (Object.keys(errors).length === 0 && dataCorrect) {

                navigate("/FormSuccess", { replace: true })

            }



        },
        [errors, dataCorrect, navigate]);

    return { handleChange, handleSubmit, errors, values, handleRegister }
    
};

export default useForm;