import React, { useState } from "react";
import "../App.css";
import "../assets/CSS/Html.css";
import Popup from "../components/Popup";
import HtmlEditor from "../components/HtmlEditor";

export default function Services() {
  const [buttonPop, setButtonPopup] = useState(false);
  const [headerbuttonPop, setheaderButtonPopup] = useState(false);

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

        <div className="btn-popup">
          <button onClick={() => setButtonPopup(true)}>Open Popup</button>
        </div>

        <div className="popup-text">
          <Popup trigger={buttonPop} setTrigger={setButtonPopup}>
            <HtmlEditor
              statemessage={`<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>`}
            />
          </Popup>
        </div>
        <div className="text-explained">
          <h1> Example Explained</h1>
          <li>
            The DOCTYPE html declaration defines that this document is an HTML5
            document{" "}
          </li>
          <li>The html element is the root element of an HTML page</li>
          <li>
            The head element contains meta information about the HTML page{" "}
          </li>
          <li>
            The title element specifies a title for the HTML page (which is
            shown in the browser's title bar or in the page's tab)
          </li>
          <li>
            The body element defines the document's body, and is a container for
            all the visible contents, such as headings, paragraphs, images,
            hyperlinks, tables, lists, etc.
          </li>
          <li>The h1 element defines a large heading</li>
          <li>The p element defines a paragraph</li>
        </div>
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
