//import { useNavigate } from "react-router-dom";
import { useState} from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const useAuth = () => {
   // const navigate = useNavigate();
    const auth = getAuth(signUp);
    
  //  const [email, setEmail] = useState("")
    //const [password, setPassword] = useState("")
    
 
    const onSubmit = (e) => {
        e.preventDefault();
        //setEmail = e.target.value;
       // setPassword = e.target.value;
        

    }

    const signUp = () => {
       createUserWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
        //signed in
        const user = userCredential.user;
        //...
        console.log(user);
        alert("registration successful")
        
       })     

       //setCurrentUser(true); 
        .catch ((error) => {
              const errorCode = error.code;
    //const errorMessage = error.message;
    alert(errorCode)
            });
           
    }; return {  onSubmit, signUp, email, password}
 };
 export default useAuth;