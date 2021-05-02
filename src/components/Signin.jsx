import React from 'react'
import {useSpring, animated} from 'react-spring';
import { useState } from 'react/cjs/react.development';
import '../assets/CSS/Signin.css'



export default function Signin() {

    const [registrationFormStatus, setRegisterFormStatus] = useState(false);
   // const [loginFormstatus, setLoginFormtatus] = useState ();

   const loginProps = useSpring({
       left : registrationFormStatus ? -500: 0,
       opacity: registrationFormStatus ? 0 : 1
   })
   const registerProps = useSpring({
    left : registrationFormStatus ? 0 : 500,
    opacity: registrationFormStatus ? 1 : 0
})


    function registerClicked(){ setRegisterFormStatus(true)}
    function loginClicked(){ setRegisterFormStatus(false)}

    return (
        
         <div className="container">
             <div className="login-register-wrapper">
                 <div className="nav-buttons">
                     <label onClick={loginClicked}   id="loginBtn" className='active'>Login</label>
                     <label onClick={registerClicked}    id="registerBtn" className=' '>Register</label>
                 </div>
                 <div className="form-group">
                    <animated.form action='' id='loginform' style={loginProps}><LoginForm/></animated.form> 
                    <animated.form action='' id='registerform' style={registerProps}><RegisterForm/></animated.form>
                     
                 </div>
                 <div className="forgot-panel">Forgotten Password</div>
             </div>
             
         </div>
            
        
    );
}

function LoginForm(){
    return(

        <>
        <React.Fragment>
            <label for='username'>USERNAME</label>
            <input type="text" id="username"/>
            <label for='password'>PASSWORD</label>
            <input type='text' id='password'/>
            <input type='submit' value='submit' className='submit'/>        
        
        </React.Fragment>
        </>
    );
}

function RegisterForm() {
    return(

<>
<React.Fragment>
<form action='' id='registerform'>

<label for="fullname">Full Name</label>
<input type="text" id="fullname"/>
<label for='username'>USERNAME</label>

<input type="text" id="username"/>
 <label for='password'>PASSWORD</label>
 <input type='text' id='password'/>
 <label for='confirmpassword'>CONFIRM PASSWORD</label>
 <input type='text' id='confirmpassword'/>
<input type='submit' value='submit' className='submit'/> 
</form>
</React.Fragment>
</>
    );
    
}