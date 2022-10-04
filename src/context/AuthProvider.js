import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import AuthContext from './AuthContext'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


 const AuthProvider = ({ children }) => {
 const [user, setUser] = useState(null);
 useEffect(() => {
 onAuthStateChanged(auth,(user) => {
 setUser(user)
 })
 }, []);

 
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...s
  })
  .catch((errors) => {
     errors = errors.code;
    errors = errors.message;
    // ..
  });
 
 return (
 <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
 );
 };
 export default AuthProvider