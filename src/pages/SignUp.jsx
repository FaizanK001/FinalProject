import React,{useState} from 'react';
import '../App.css';
import Login from '../components/login';
//import Login from '../components/login'
import Register from '../components/Register'

export default function SignUp(){

    const [click, setClick] = useState(true);
    return (
    <>
    
    <div class="container">
      <div class="forms-container">
        <div class="signin-signup">

{
click?<Login/>
  :<Register/>
}

        </div>
      </div>

      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button class="btn transparent" id="sign-up-btn" onClick={()=>setClick(!click)} >
              Sign up 
            </button>
          </div>
          <img src="img/log.svg" class="image" alt="" />
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button class="btn transparent" id="sign-in-btn" >
              Sign in
            </button>
          </div>
          <img src="img/register.svg" class="image" alt="" />
        </div>
      </div>
    </div>
 
    
    </>
    
    )
};