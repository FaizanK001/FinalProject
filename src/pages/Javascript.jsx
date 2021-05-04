import React, { useState } from "react";

import JsHeroSection from "../components/JsHeroSection";
import "../assets/CSS/Js.css";
import Verticalmenu from "../components/Verticalmenu";
import Popup from "../components/Popup";
import JsEditor from "../components/JsEditor";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Footer from "../components/Footer";

export default function Javascript() {
  const [buttonPop, setButtonPopup] = useState(false);
  const [button2Pop, setButtonPopup2] = useState(false);
 

  return (
    <>
      <JsHeroSection />
      <h1>JavaScript language</h1>

      <section className="section">
        <h2>Examples in Each Chapter</h2>
        <p> With our "Try it Yourself" editor, you can edit the source code and view the result.</p>
        <div className="Card">
          <div className="Card-header">
            <h5>Example</h5>
          </div>
          <SyntaxHighlighter language={Javascript} style={docco}>
      {markdown1}
    </SyntaxHighlighter>
        
          <div className="btn-js">
            <button onClick={() => setButtonPopup(true)}>
              "Try it Yourself"
            </button>
          </div>

          <Popup trigger={buttonPop} setTrigger={setButtonPopup}>
            <JsEditor statemessage={markdown1} />
          </Popup>
        </div>
      </section>




      <section className="section">
      <h2>JavaScript Can Change HTML Styles (CSS)</h2>
        <p> Changing the style of an HTML element, is a variant of changing an HTML attribute:</p>
        <div className="Card">
          <div className="Card-header">
            <h5>Example</h5>
          </div>
          <SyntaxHighlighter language={Javascript} style={docco}>
      {markdown2}
    </SyntaxHighlighter>
         
          <div className="btn-js">
            <button onClick={() => setButtonPopup2(true)}>
              "Try it Yourself"
            </button>
          </div>

         
          <Popup trigger={button2Pop} setTrigger={setButtonPopup2}>
            <JsEditor statemessage={markdown2} />
          </Popup>
        </div>



      </section>
      <Footer />
    </>
  );
}



const markdown1 = `<!DOCTYPE html>
<html>
<body>
<h2>What Can JavaScript Do?</h2>
<p id="demo">JavaScript can change HTML content.</p>
<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>
</body>
</html>`;

const markdown2 = `<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p id="demo">JavaScript can change the style of an HTML element.</p>

<button type="button" onclick="document.getElementById('demo').style.fontSize='35px'">Click Me!</button>

</body>
</html> 

`;