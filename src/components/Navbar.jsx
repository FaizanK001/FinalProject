import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../assets/CSS/Navbar.css';
import { Button } from './Button';
import '../assets/CSS/LogoutBtn.css'

import fire from "../firebase/firebase";

function Navbar() {
    
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
      const [currentuser, setcurrentuser] = useState();
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    

    const showButton =  () => {
        
        if(window.innerWidth <= 960){
            setButton(false)

        }else{
            setButton(true)
        }
    };

useEffect (() => {
showButton();

fire.auth().onAuthStateChanged((currentuser) =>{
    setcurrentuser(currentuser)
})

}, []);

    window.addEventListener('resize', showButton);
   
    const handleLogout = () => {
        fire.auth().signOut();
        
      };



   
    return (
        <>
            <nav className='navbar'>
                <div className ='navbar-container'>
                    <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                        Note <i className='fas fa-dragon'/>
                    </Link>
                    <div className= 'menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>

                    
                    <ul className= {click ? 'nav-menu active': 'nav-menu'}>
                        

                        <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            HOME
                        </Link>
                        </li>

                        <li className='nav-item'>
                        <Link to='/Html' className='nav-links' onClick={closeMobileMenu}>
                           HTML
                        </Link>
                        </li>

                        <li className='nav-item'>
                        <Link to='/Css' className='nav-links' onClick={closeMobileMenu}>
                            CSS
                        </Link>
                        </li>
                       
                       <li className='nav-item'>
                           <Link to='/Javascript' className='nav-links'  onClick={closeMobileMenu}>
                               JAVASCRIPT
                               </Link>
                        </li>
                        
                     <li className='nav-item'>
                     
             {currentuser ? <Link to='/profile' className='nav-links' onClick={closeMobileMenu}  >
                         PROFILE
                     </Link>: null }
                    </li> 
                     
                      <li className='nav-item'>
                      {currentuser ? <Link to='/SignIn' className='nav-links-mobile' onClick={() => {handleLogout(); closeMobileMenu(); }}>
                           Sign Out
                        </Link> 
                      : <Link to='/SignIn' className='nav-links-mobile' onClick={closeMobileMenu}>
                           Sign In
                         </Link> }
                        </li>
                        
                        
                    </ul>
                   {currentuser?
                    <b>

                    {button &&<button className='btn--outline' onClick={handleLogout}>Sign out
                    </button>}</b>:<b>
                    {button &&<Button buttonStyle='btn--outline'>Sign In</Button>}
                    
                    </b>}
                </div>
            </nav>
        </>
    )
}
export default Navbar