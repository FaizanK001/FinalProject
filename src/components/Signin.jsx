import React from 'react'
import {useSpring, animated} from 'react-spring';
import { useState } from 'react/cjs/react.development';
import '../assets/CSS/Signin.css'



export default function Signin() {

    const [registrationFormStatus, setRegisterFormStatus] = useState(false);
   // const [loginFormstatus, setLoginFormtatus] = useState ();

   const loginProps = useSpring({
       left : registrationFormStatus ? -430: 0,
       opacity: registrationFormStatus ? 0 : 1
   })
   const registerProps = useSpring({
    left : registrationFormStatus ? 0 : 430,
    opacity: registrationFormStatus ? 1 : 0
})

    function registerClicked(){alert('Register clicked'); setRegisterFormStatus(true)}
    function loginClicked(){alert('Login clicked'); setRegisterFormStatus(false)}

    return (
        
         <div className="container">
             <div className="login-register-wrapper">
                 <div className="nav-buttons">
                     <button onClick={loginClicked}   id="loginBtn" className='active'>Login</button>
                     <button onClick={registerClicked}    id="registerBtn" className=' '>Register</button>
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