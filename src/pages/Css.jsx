import React, { useState } from "react";
import "../assets/CSS/Css.css";
import CssHeroSection from "../components/CssHeroSection";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Footer from "../components/Footer";
import CssEditor from "../components/CssEditor";
import Popup from "../components/Popup";

export default function Css() {
  const [buttonPop, setButtonPopup] = useState(false);
  const [syntexbuttonPop, setsyntexButtonPopup] = useState(false);
  const [boxbuttonPop, setboxButtonPopup] = useState(false);
  const [outlinebuttonPop, setoutlineButtonPopup] = useState(false);
  const [borderbuttonPop, setborderButtonPopup] = useState(false);
  const [inputbuttonPop, setinputButtonPopup] = useState(false);
  return (
    <>
      <CssHeroSection />

      <h1>LEARN CSS</h1>

      {/*CSS Example*/}
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

      {/**CSS Syntex Example*/}
      <div className="css-section">
        <div className="css-section-text">
          <h2>CSS Syntax</h2>
          <p>
            In this example all p elements will be center-aligned, with a red
            text color:
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
            <button onClick={() => setsyntexButtonPopup(true)}>
              "Try it Yourself"
            </button>
          </div>

          <Popup trigger={syntexbuttonPop} setTrigger={setsyntexButtonPopup}>
            <CssEditor statemessage={syntax} />
          </Popup>
        </div>
      </div>

      {/**CSS BOX Example*/}
      <div className="css-section">
        <div className="css-section-text">
          <h2>The CSS Box Model</h2>
          <p>
            In CSS, the term "box model" is used when talking about design and
            layout. The CSS box model is essentially a box that wraps around
            every HTML element. It consists of: margins, borders, padding, and
            the actual content. The image below illustrates the box model:
          </p>
        </div>
        <div className="Css-Card">
          <div className="Css-Card-header">
            <h5>Example</h5>
          </div>
          <SyntaxHighlighter language={Css} style={docco}>
            {box}
          </SyntaxHighlighter>

          <div className="btn-js">
            <button onClick={() => setboxButtonPopup(true)}>
              "Try it Yourself"
            </button>
          </div>

          <Popup trigger={boxbuttonPop} setTrigger={setboxButtonPopup}>
            <CssEditor statemessage={box} />
          </Popup>
        </div>
      </div>

         {/**CSS OUTLINE Example*/}
         <div className="css-section">
        <div className="css-section-text">
          <h2>CSS Outline</h2>
          <p>
          An outline is a line that is drawn around elements, OUTSIDE the borders, to make the element "stand out".
          </p>
        </div>
        <div className="Css-Card">
          <div className="Css-Card-header">
            <h5>Example</h5>
          </div>
          <SyntaxHighlighter language={Css} style={docco}>
            {outline}
          </SyntaxHighlighter>

          <div className="btn-js">
            <button onClick={() => setoutlineButtonPopup(true)}>
              "Try it Yourself"
            </button>
          </div>

          <Popup trigger={outlinebuttonPop} setTrigger={setoutlineButtonPopup}>
            <CssEditor statemessage={outline} />
          </Popup>
        </div>
      </div>

       {/**CSS Border Example*/}
       <div className="css-section">
        <div className="css-section-text">
          <h2>CSS Border Style</h2>
          <p>
          The CSS border properties allow you to specify the style, width, and color of an element's border.
          </p>
        </div>
        <div className="Css-Card">
          <div className="Css-Card-header">
            <h5>Example</h5>
          </div>
          <SyntaxHighlighter language={Css} style={docco}>
            {border}
          </SyntaxHighlighter>

          <div className="btn-js">
            <button onClick={() => setborderButtonPopup(true)}>
              "Try it Yourself"
            </button>
          </div>

          <Popup trigger={borderbuttonPop} setTrigger={setborderButtonPopup}>
            <CssEditor statemessage={border} />
          </Popup>
        </div>
      </div>

  {/**CSS input fields Example*/}
  <div className="css-section">
        <div className="css-section-text">
          <h2>Styling Input Fields</h2>
          <p>
          Use the width property to determine the width of the input field:
          </p>
        </div>
        <div className="Css-Card">
          <div className="Css-Card-header">
            <h5>Example</h5>
          </div>
          <SyntaxHighlighter language={Css} style={docco}>
            {input}
          </SyntaxHighlighter>

          <div className="btn-js">
            <button onClick={() => setinputButtonPopup(true)}>
              "Try it Yourself"
            </button>
          </div>

          <Popup trigger={inputbuttonPop} setTrigger={setinputButtonPopup}>
            <CssEditor statemessage={input} />
          </Popup>
        </div>
      </div>

      <Footer />
    </>
  );
}

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

const box = `<!DOCTYPE html>
<html>
<head>
<style>
div {
  background-color: lightgrey;
  width: 300px;
  border: 15px solid green;
  padding: 50px;
  margin: 20px;
}
</style>
</head>
<body>

<h2>Demonstrating the Box Model</h2>

<p>The CSS box model is essentially a box that wraps around every HTML element. It consists of: borders, padding, margins, and the actual content.</p>

<div>This text is the content of the box. We have added a 50px padding, 20px margin and a 15px green border. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

</body>
</html>

`;

const outline = `<!DOCTYPE html>
<html>
<head>
<style>
p {
  border: 2px solid black;
  outline: #4CAF50 solid 10px;
  margin: auto;  
  padding: 20px;
  text-align: center;
}
</style>
</head>
<body>

<h2>CSS Outline</h2>
<p>This element has a 2px black border and a green outline with a width of 10px.</p>

</body>
</html>
`;

const border = `<!DOCTYPE html>
<html>
<head>
<style>
p.dotted {border-style: dotted;}
p.dashed {border-style: dashed;}
p.solid {border-style: solid;}
p.double {border-style: double;}
p.groove {border-style: groove;}
p.ridge {border-style: ridge;}
p.inset {border-style: inset;}
p.outset {border-style: outset;}
p.none {border-style: none;}
p.hidden {border-style: hidden;}
p.mix {border-style: dotted dashed solid double;}
</style>
</head>
<body>

<h2>The border-style Property</h2>
<p>This property specifies what kind of border to display:</p>

<p class="dotted">A dotted border.</p>
<p class="dashed">A dashed border.</p>
<p class="solid">A solid border.</p>
<p class="double">A double border.</p>
<p class="groove">A groove border.</p>
<p class="ridge">A ridge border.</p>
<p class="inset">An inset border.</p>
<p class="outset">An outset border.</p>
<p class="none">No border.</p>
<p class="hidden">A hidden border.</p>
<p class="mix">A mixed border.</p>

</body>
</html>

`;

const input = `<!DOCTYPE html>
<html>
<head>
<style> 
input {
  width: 100%;
}
</style>
</head>
<body>

<p>A full-width input field:</p>

<form>
  <label for="fname">First Name</label>
  <input type="text" id="fname" name="fname">
</form>

</body>
</html>
`;