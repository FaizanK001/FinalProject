import React from "react";
import "../assets/CSS/HeroJavascript.css";
export default function JsHeroSection() {
  return (
    <>
      <div className="js-container">
        <div className="js-section">
          <h1>JavaScript</h1>
          <h3>
            <i className="fab fa-js-square fa-10x"></i>
          </h3>
          <div className="js-text">
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
      </div>
    </>
  );
}
