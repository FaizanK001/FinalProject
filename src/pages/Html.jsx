import React, {useState} from 'react';
import '../App.css';
import '../assets/CSS/Html.css'
import Popup from '../components/Popup'

export default function Services(){
    const [buttonPop, setButtonPopup] = useState(false);
    return( 
    <>  
    <div className="Html-container">
        <div className="herosection-container">
            <h1>HTML Tutorial</h1>
            <h3><i class="fab fa-html5 fa-10x"/></h3> 
        <div className="text">
            <h2>WHAT IS HTML ?</h2>
            <li>HTML stands for Hyper Text Markup Language </li>
            <li>HTML is the standard markup language for creating Web pages </li>
            <li>HTML describes the structure of a Web page </li>
            <li>HTML consists of a series of elements </li>
            <li>HTML elements tell the browser how to display the content </li>
            <li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li>
            </div>
            
        </div>
        <h1>A Simple HTML Document</h1> 
     <div className="hpopup"> 
          <h1>Pop up</h1>
            <button onClick={() => setButtonPopup(true)}>Open Popup</button>
            </div>
            <div className="popup-text">
            <Popup trigger={buttonPop} setTrigger={setButtonPopup}>
                <h3>My popup</h3>
                <p>This is my button triggered popup</p>
            </Popup>
            </div>
            </div>
    </>
    )
}