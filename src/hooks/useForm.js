import { useState, useEffect } from "react";
import validate from "../validations";
import { useNavigate } from "react-router-dom";
import '../assets/styles/home.css';
//import { registerUser} from "../firebase/firebase";




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
    const [errors, setErrors] = useState(false);
    //11.set the usestate for correct data input
    const [dataCorrect, setDataCorrect] = useState(false);

  //  const [email, setEmail] = useState('');
	//const [password, setPassword] = useState('');


    const handleChange = async (e) => {
        e.preventDefault();
         const name = e.target.name;
        const value = e.target.value;
        const id = e.target.id;

        setValues({ ...values, [name]: value })
     

        console.log(id, value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors(validate(values));
        setDataCorrect(true);

    }


      
    useEffect(
        () => {

            if (Object.keys(errors).length === 0 && dataCorrect) {

                navigate("/FormSuccess", { replace: true })

            }
           

        },
        [errors, dataCorrect, navigate]);

    return { handleChange, handleSubmit, errors, values}
    
};

export default useForm;