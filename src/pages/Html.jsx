import React, { useState } from "react";
import "../App.css";
import "../assets/CSS/Html.css";
import Popup from "../components/Popup";
import HtmlEditor from "../components/HtmlEditor";
import HtmlHeroSection from "../components/HtmlHeroSection";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Services() {
  const [buttonPop, setButtonPopup] = useState(false);
  const [headerbuttonPop, setheaderButtonPopup] = useState(false);

  return (
    <>
      <HtmlHeroSection />




      <div className="btn-popup">
        <button onClick={() => setButtonPopup(true)}>"Try it Yourself"</button>
      </div>
      <div className="popup-text">
        <Popup trigger={buttonPop} setTrigger={setButtonPopup}>
          <HtmlEditor
            statemessage={`<!DOCTYPE html><html><head><title>Page Title</title></head><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>`}
          />
        </Popup>
      </div>






      <div className="btn-popup">
        <button onClick={() => setheaderButtonPopup(true)}>Open Popup</button>
      </div>

      <div className="Header-popup">
        <Popup trigger={headerbuttonPop} setTrigger={setheaderButtonPopup}>
          <HtmlEditor statemessage={"<h1>Header</h1>"} />
        </Popup>
      </div>
    </>
  );
}
