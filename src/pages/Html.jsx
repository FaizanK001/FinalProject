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


        </div>
     <div className="hpopup"> 
          <h1>Pop up</h1>
            <button onClick={() => setButtonPopup(true)}>Open Popup</button>
            </div>
            <Popup trigger={buttonPop} setTrigger={setButtonPopup}>
                <h3>My popup</h3>
                <p>This is my button triggered popup</p>
            </Popup>

            </div>
    </>
    )
}