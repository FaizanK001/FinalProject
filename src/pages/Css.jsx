import React,{useState} from 'react';
import '../assets/CSS/Css.css';
import CssHeroSection from '../components/CssHeroSection';
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Footer from "../components/Footer";
import CssEditor from '../components/CssEditor';
import Popup from '../components/Popup'

export default function Css(){
  const [buttonPop, setButtonPopup] = useState(false);
  const [button2Pop, setButtonPopup2] = useState(false);
    return (
        <>
           <CssHeroSection/>
       
           <h1>LEARN CSS</h1>

     
<div className="css-section">
<div className="css-section-text">
  <h2>Examples in Each Chapter</h2>
  <p>
    With our "Try it Yourself" editor, you can edit the source code and
    view the result.
  </p>
  </div>
  <div className="Css-Card">
    <div className="Css-Card-header">
      <h5>Example</h5>
    </div>
    <SyntaxHighlighter language={Css} style={docco}>
      {CSSExample}
    </SyntaxHighlighter>

    <div className="btn-js">
      <button onClick={() => setButtonPopup(true)}>
        "Try it Yourself"
      </button>
    </div>

    <Popup trigger={buttonPop} setTrigger={setButtonPopup}>
      <CssEditor statemessage={CSSExample} />
    </Popup>
  </div>
</div>



<div className="css-section">
<div className="css-section-text">
  <h2>CSS Syntax</h2>
  <p>
  In this example all p elements will be center-aligned, with a red text color:
  </p>
  </div>
  <div className="Css-Card">
    <div className="Css-Card-header">
      <h5>Example</h5>
    </div>
    <SyntaxHighlighter language={Css} style={docco}>
      {syntax}
    </SyntaxHighlighter>

    <div className="btn-js">
      <button onClick={() => setButtonPopup2(true)}>
        "Try it Yourself"
      </button>
    </div>

    <Popup trigger={button2Pop} setTrigger={setButtonPopup2}>
      <CssEditor statemessage={syntax} />
    </Popup>
  </div>
</div>

<Footer/>
        </>
    )
};



const CSSExample = `<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}
</style>
</head>
<body>

<h1>My First CSS Example</h1>
<p>This is a paragraph.</p>

</body>
</html>
`;

const syntax = `
<!DOCTYPE html>
<html>
<head>
<style>
p {
  color: red;
  text-align: center;
} 
</style>
</head>
<body>
<p>Hello World!</p>
<p>These paragraphs are styled with CSS.</p>
</body>
</html>
`;
