import React, { useState } from "react";
import JsHeroSection from "../components/JsHeroSection";
import "../assets/CSS/Js.css";
import Popup from "../components/Popup";
import JsEditor from "../components/JsEditor";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Footer from "../components/Footer";

export default function Javascript() {
  const [buttonPop, setButtonPopup] = useState(false);
  const [button2Pop, setButtonPopup2] = useState(false);
  const [outbuttonPop, setoutButtonPopup] = useState(false);
  const [statmentbuttonPop, setstatmentButtonPopup] = useState(false);
  const [arraybuttonPop, setarrayButtonPopup] = useState(false);
  const [arraysortbuttonPop, setarraysortButtonPopup] = useState(false);
  return (
    <>
      <JsHeroSection />
      <h1>JavaScript language</h1>

      {/* First Exmaple of JavaSCript*/}
      <div className="section">
        <div className="section-text">
          <h2>Examples in Each Chapter</h2>
          <p>
            With our "Try it Yourself" editor, you can edit the source code and
            view the result.
          </p>
        </div>
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
      </div>

      {/* JavaSCript example with CSS*/}
      <section className="section">
        <div className="section-text">
          <h2>JavaScript Can Change HTML Styles (CSS)</h2>
          <p>
            Changing the style of an HTML element, is a variant of changing an
            HTML attribute:
          </p>
        </div>
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

      {/* JavaSCript example with CSS*/}
      <section className="section">
        <div className="section-text">
          <h2>JavaScript Output</h2>
          <p>
            To access an HTML element, JavaScript can use the
            document.getElementById(id) method. The id attribute defines the
            HTML element. The innerHTML property defines the HTML content:
          </p>
        </div>
        <div className="Card">
          <div className="Card-header">
            <h5>Example</h5>
          </div>
          <SyntaxHighlighter language={Javascript} style={docco}>
            {output}
          </SyntaxHighlighter>

          <div className="btn-js">
            <button onClick={() => setoutButtonPopup(true)}>
              "Try it Yourself"
            </button>
          </div>

          <Popup trigger={outbuttonPop} setTrigger={setoutButtonPopup}>
            <JsEditor statemessage={output} />
          </Popup>
        </div>
      </section>

      {/* JavaSCript statment example*/}
      <section className="section">
        <div className="section-text">
          <h2>JavaScript Statements</h2>
          <p>
            A computer program is a list of "instructions" to be "executed" by a
            computer. In a programming language, these programming instructions
            are called statements. A JavaScript program is a list of programming
            statements.
          </p>
        </div>
        <div className="Card">
          <div className="Card-header">
            <h5>Example</h5>
          </div>
          <SyntaxHighlighter language={Javascript} style={docco}>
            {statment}
          </SyntaxHighlighter>

          <div className="btn-js">
            <button onClick={() => setstatmentButtonPopup(true)}>
              "Try it Yourself"
            </button>
          </div>

          <Popup
            trigger={statmentbuttonPop}
            setTrigger={setstatmentButtonPopup}
          >
            <JsEditor statemessage={statment} />
          </Popup>
        </div>
      </section>

      {/* JavaSCript array example*/}
      <section className="section">
        <div className="section-text">
          <h2>JavaScript Arrays</h2>
          <p>
            An array is a special variable, which can hold more than one value
            at a time. If you have a list of items (a list of car names, for
            example), storing the cars in single variables could look like this:
          </p>
        </div>
        <div className="Card">
          <div className="Card-header">
            <h5>Example</h5>
          </div>
          <SyntaxHighlighter language={Javascript} style={docco}>
            {array}
          </SyntaxHighlighter>

          <div className="btn-js">
            <button onClick={() => setarrayButtonPopup(true)}>
              "Try it Yourself"
            </button>
          </div>

          <Popup trigger={arraybuttonPop} setTrigger={setarrayButtonPopup}>
            <JsEditor statemessage={array} />
          </Popup>
        </div>
      </section>

      {/* JavaSCript arraysort example*/}
      <section className="section">
        <div className="section-text">
          <h2>JavaScript Arrays</h2>
          <p>
            An array is a special variable, which can hold more than one value
            at a time. If you have a list of items (a list of car names, for
            example), storing the cars in single variables could look like this:
          </p>
        </div>
        <div className="Card">
          <div className="Card-header">
            <h5>Example</h5>
          </div>
          <SyntaxHighlighter language={Javascript} style={docco}>
            {arraysort}
          </SyntaxHighlighter>

          <div className="btn-js">
            <button onClick={() => setarraysortButtonPopup(true)}>
              "Try it Yourself"
            </button>
          </div>

          <Popup
            trigger={arraysortbuttonPop}
            setTrigger={setarraysortButtonPopup}
          >
            <JsEditor statemessage={arraysort} />
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

const output = `<!DOCTYPE html>
<html>
<body>

<h2>My First Web Page</h2>
<p>My First Paragraph.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 5 + 6;
</script>

</body>
</html> 
`;

const statment = `<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Statements</h2>

<p>A <b>JavaScript program</b> is a list of <b>statements</b> to be executed by a computer.</p>

<p id="demo"></p>

<script>
var x, y, z;  // Statement 1
x = 5;        // Statement 2
y = 6;        // Statement 3
z = x + y;    // Statement 4

document.getElementById("demo").innerHTML =
"The value of z is " + z + ".";  
</script>

</body>
</html>
`;

const array = `<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arrays</h2>

<p id="demo"></p>

<script>
var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;
</script>

</body>
</html>

`;

const arraysort = `<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Sort</h2>

<p>The sort() method sorts an array alphabetically.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.sort();
  document.getElementById("demo").innerHTML = fruits;
}
</script>

</body>
</html>
`;
