import React, { useState } from "react";
import "../App.css";
import "../assets/CSS/Html.css";
import Popup from "../components/Popup";
import HtmlEditor from "../components/HtmlEditor";
import HtmlHeroSection from "../components/HtmlHeroSection";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Footer from "../components/Footer";

export default function Html() {
  const [buttonPop, setButtonPopup] = useState(false);
  const [headerbuttonPop, setheaderButtonPopup] = useState(false);

  return (
    <>
     


     <HtmlHeroSection />
     <h1>LEARN HTML</h1>

   <div className="html-section">
     <div className="html-section-text">
     <h2>Easy Learning with HTML "Try it Yourself"</h2>
     <p>With our "Try it Yourself" editor, you can edit the HTML code and view the result:</p>
     </div>
      <div className="Html-card">
        <div className="Html-card-header">
        <h3>Example</h3>
        </div>
        <SyntaxHighlighter language={Html} style={docco}>
            {firstcode}
          </SyntaxHighlighter>
      <div className="btn-popup">
        <button onClick={() => setButtonPopup(true)}>"Try it Yourself"</button>
        </div>

      
        <Popup trigger={buttonPop} setTrigger={setButtonPopup}>
          <HtmlEditor
            statemessage={firstcode}
          />
        </Popup>
        </div>
      </div>
      

      <div className="html-section">
        <div className="html-section-text">
     <h2>HTML Headings</h2>
     <p>HTML headings are defined with the h1 to h6 tags.</p>
     <p>h1 defines the most important heading. h6 defines the least important heading: </p>
     </div>
      <div className="Html-card">
        <div className="Html-card-header">
        <h3>Example</h3>
        </div>
        <SyntaxHighlighter language={Html} style={docco}>
            {header}
          </SyntaxHighlighter>
      <div className="btn-popup">
        <button onClick={() => setheaderButtonPopup(true)}>"Try it Yourself"</button>
        </div>

      
        <Popup trigger={headerbuttonPop} setTrigger={setheaderButtonPopup}>
          <HtmlEditor
            statemessage={header}
          />
        </Popup>
        </div>
      </div>


   <Footer/>
    </>
  );
}



const firstcode = `<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
`;

const header = `<!DOCTYPE html>
<html>
<body>

<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
<h4>This is heading 4</h4>
<h5>This is heading 5</h5>
<h6>This is heading 6</h6>

</body>
</html>
`;