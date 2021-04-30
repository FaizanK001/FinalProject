import React, { useState } from "react";
import "../App.css";
import "../assets/CSS/Html.css";
import Popup from "../components/Popup";
import HtmlEditor from '../components/HtmlEditor'

export default function Services() {
  const [buttonPop, setButtonPopup] = useState(false);

  
  return (
    <>
      <div className="Html-container">
        <div className="herosection-container">
          <h1>HTML Tutorial</h1>
          <h3>
            <i class="fab fa-html5 fa-10x" />
          </h3>
          <div className="text">
            <h2>WHAT IS HTML ?</h2>
            <li>HTML stands for Hyper Text Markup Language </li>
            <li>
              HTML is the standard markup language for creating Web pages{" "}
            </li>
            <li>HTML describes the structure of a Web page </li>
            <li>HTML consists of a series of elements </li>
            <li>HTML elements tell the browser how to display the content </li>
            <li>
              HTML elements label pieces of content such as "this is a heading",
              "this is a paragraph", "this is a link", etc.
            </li>
          </div>
        </div>

        <h1>Easy Learning with HTML "Try it Yourself"</h1>
        <p>
          With our "Try it Yourself" editor, you can edit the HTML code and view
          the result:
        </p>

        <div className="card-temple">
          <div className="hpopup">
            <button onClick={() => setButtonPopup(true)}>Open Popup</button>
          </div>
        </div>

        <div className="popup-text">
          <Popup trigger={buttonPop} setTrigger={setButtonPopup}>
            <HtmlEditor
             statemessage= {'<h1>Header</h1>'}
            
            
            />
          </Popup>
        </div>

        <h1> Example Explained</h1>
      </div>
    </>
  );
}
