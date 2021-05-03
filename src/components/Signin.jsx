import React, { useState, useEffect } from "react";
import fire from "../firebase/firebase";
import Forms from '../components/Forms'

export default function Signin() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailerror, setEmailError] = useState("");
  const [passworderror, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);


  const clearInputs = () => {
      setEmail('');
      setPassword('');
  }

  const clearErrors = () =>{
      setEmailError('');
      setPasswordError('');
  }


  const handleLogin = () => {
      clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        // eslint-disable-next-line default-case
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handlesignup = () =>{
      clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((err) => {
      // eslint-disable-next-line default-case
      switch (err.code) {
        case "auth/emial-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
      }
    });

  };

  const handleLogout = () => {
      fire.auth.signOut();
  }

const authListener =() =>{
    fire.auth().onAuthStateChanged(user=>{
        if(user){
            clearInputs();
            setUser(user)
        }else
        setUser("");
    })


};

useEffect(()=>{
    authListener();
});

  return (
  <>
   <Forms
   email={email}
   setEmail={setEmail}
   password={password}
   setPassword={setPassword}
   handleLogin={handleLogin}
   handlesignup={handlesignup}
   hasAccount={hasAccount}
   setHasAccount={setHasAccount}
   emailerror={emailerror}
   passworderror={passworderror}
   />
  </>
    
  );
};
