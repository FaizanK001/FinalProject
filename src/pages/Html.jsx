import React, { useState } from "react";
import "../App.css";
import "../assets/CSS/Html.css";
import Popup from "../components/Popup";
import Editor from "../components/Editor";

export default function Services() {
  const [buttonPop, setButtonPopup] = useState(false);
  const [html, setHtml] = useState("");
  // const [css, setCss ] = useState('')

  const srcDoc = `
    <html>
    <body>${html}</body>

    </html>
    
    `;
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
            <div className="pane">
              <Editor
                language="xml"
                displayName="HTML"
                value={html}
                onChange={setHtml}
              />
            </div>
            <div className="pane">
              <iframe
                srcDoc={srcDoc}
                title="output"
                sandbox="allow-scripts"
                frameborder="0"
                width="50%"
                height="50%"
              />
            </div>
          </Popup>
        </div>

        <h1> hjheerkjakdklfjasdlkjals</h1>
      </div>
    </>
  );
}
