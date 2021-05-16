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
  const [stylingbuttonPop, setStylingButtonPopup] = useState(false);
  const [BgColorbuttonPop, setBgColorButtonPopup] = useState(false);
  const [FormatbuttonPop, setFormatButtonPopup] = useState(false);
  const [TablebuttonPop, setTableButtonPopup] = useState(false);
  const [ListingbuttonPop, setListingButtonPopup] = useState(false);

  return (
    <div>
      <HtmlHeroSection />
      <h1>LEARN HTML</h1>

      {/*HTML EXAMPLE*/}
      <div className="html-section">
        <div className="html-section-text">
          <h2>Easy Learning with HTML "Try it Yourself"</h2>
          <p>
            With our "Try it Yourself" editor, you can edit the HTML code and
            view the result:
          </p>
        </div>
        <div className="Html-card">
          <div className="Html-card-header">
            <h3>Example</h3>
          </div>
          <SyntaxHighlighter language={Html} style={docco}>
            {firstcode}
          </SyntaxHighlighter>
          <div className="btn-popup">
            <button onClick={() => setButtonPopup(true)}>
              "Try it Yourself"
            </button>
          </div>

          <Popup trigger={buttonPop} setTrigger={setButtonPopup}>
            <HtmlEditor statemessage={firstcode} />
          </Popup>
        </div>
      </div>

      {/*HTML Heading Section*/}
      <div className="html-section">
        <div className="html-section-text">
          <h2>HTML Headings</h2>
          <p>HTML headings are defined with the h1 to h6 tags.</p>
          <p>
            h1 defines the most important heading. h6 defines the least
            important heading:{" "}
          </p>
        </div>
        <div className="Html-card">
          <div className="Html-card-header">
            <h3>Example</h3>
          </div>
          <SyntaxHighlighter language={Html} style={docco}>
            {header}
          </SyntaxHighlighter>
          <div className="btn-popup">
            <button onClick={() => setheaderButtonPopup(true)}>
              "Try it Yourself"
            </button>
          </div>

          <Popup trigger={headerbuttonPop} setTrigger={setheaderButtonPopup}>
            <HtmlEditor statemessage={header} />
          </Popup>
        </div>
      </div>

      {/*HTML Styling EXAMPLE*/}
      <div className="html-section">
        <div className="html-section-text">
          <h2>The HTML Style Attribute</h2>
          <p>
            Setting the style of an HTML element, can be done with the style
            attribute.
          </p>
          <p>The HTML style attribute has the following syntax: </p>
        </div>
        <div className="Html-card">
          <div className="Html-card-header">
            <h3>Example</h3>
          </div>
          <SyntaxHighlighter language={Html} style={docco}>
            {style}
          </SyntaxHighlighter>
          <div className="btn-popup">
            <button onClick={() => setStylingButtonPopup(true)}>
              "Try it Yourself"
            </button>
          </div>

          <Popup trigger={stylingbuttonPop} setTrigger={setStylingButtonPopup}>
            <HtmlEditor statemessage={style} />
          </Popup>
        </div>
      </div>

      {/*HTML Background color EXAMPLE*/}
      <div className="html-section">
        <div className="html-section-text">
          <h2>Background Color</h2>
          <p>
            The CSS background-color property defines the background color for
            an HTML element.
          </p>
        </div>
        <div className="Html-card">
          <div className="Html-card-header">
            <h3>Example</h3>
          </div>
          <SyntaxHighlighter language={Html} style={docco}>
            {backgroundcolor}
          </SyntaxHighlighter>
          <div className="btn-popup">
            <button onClick={() => setBgColorButtonPopup(true)}>
              "Try it Yourself"
            </button>
          </div>

          <Popup trigger={BgColorbuttonPop} setTrigger={setBgColorButtonPopup}>
            <HtmlEditor statemessage={backgroundcolor} />
          </Popup>
        </div>
      </div>

      {/*HTML Text Formatting Example*/}
      <div className="html-section">
        <div className="html-section-text">
          <h2>HTML Text Formatting</h2>
          <p>
            HTML contains several elements for defining text with a special
            meaning.
          </p>
        </div>
        <div className="Html-card">
          <div className="Html-card-header">
            <h3>Example</h3>
          </div>
          <SyntaxHighlighter language={Html} style={docco}>
            {formatting}
          </SyntaxHighlighter>
          <div className="btn-popup">
            <button onClick={() => setFormatButtonPopup(true)}>
              "Try it Yourself"
            </button>
          </div>

          <Popup trigger={FormatbuttonPop} setTrigger={setFormatButtonPopup}>
            <HtmlEditor statemessage={formatting} />
          </Popup>
        </div>
      </div>

      {/*HTML Table Example*/}
      <div className="html-section">
        <div className="html-section-text">
          <h2>HTML Tables</h2>
          <p>
            HTML tables allow web developers to arrange data into rows and
            columns.
          </p>
        </div>
        <div className="Html-card">
          <div className="Html-card-header">
            <h3>Example</h3>
          </div>
          <SyntaxHighlighter language={Html} style={docco}>
            {table}
          </SyntaxHighlighter>
          <div className="btn-popup">
            <button onClick={() => setTableButtonPopup(true)}>
              "Try it Yourself"
            </button>
          </div>

          <Popup trigger={TablebuttonPop} setTrigger={setTableButtonPopup}>
            <HtmlEditor statemessage={table} />
          </Popup>
        </div>
      </div>
      {/*HTML Listing Example*/}
      <div className="html-section">
        <div className="html-section-text">
          <h2>HTML Lists</h2>
          <p>
            HTML lists allow web developers to group a set of related items in
            lists.
          </p>
        </div>
        <div className="Html-card">
          <div className="Html-card-header">
            <h3>Example</h3>
          </div>
          <SyntaxHighlighter language={Html} style={docco}>
            {listing}
          </SyntaxHighlighter>
          <div className="btn-popup">
            <button onClick={() => setListingButtonPopup(true)}>
              "Try it Yourself"
            </button>
          </div>

          <Popup trigger={ListingbuttonPop} setTrigger={setListingButtonPopup}>
            <HtmlEditor statemessage={listing} />
          </Popup>
        </div>
      </div>

      <Footer />
    </div>
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

const style = `<!DOCTYPE html>
<html>
<body>

<p>I am normal</p>
<p style="color:red;">I am red</p>
<p style="color:blue;">I am blue</p>
<p style="font-size:50px;">I am big</p>

</body>
</html>
`;

const backgroundcolor = `<!DOCTYPE html>
<html>
<body style="background-color:powderblue;">

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
`;

const formatting = `
<!DOCTYPE html>
<html>
<body>

<p><b>This text is bold</b></p>
<p><i>This text is italic</i></p>
<p>This is<sub> subscript</sub> and <sup>superscript</sup></p>

</body>
</html>

`;

const table = `<!DOCTYPE html>
<html>
<head>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
</head>
<body>

<h2>HTML Table</h2>

<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>

</body>
</html>
`;

const listing = `<!DOCTYPE html>
<html>
<body>

<h2>An Unordered HTML List</h2>

<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>  

<h2>An Ordered HTML List</h2>

<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol> 

</body>
</html>
`;
