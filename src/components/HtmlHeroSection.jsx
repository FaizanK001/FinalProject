import React from "react";
import "../assets/CSS/Html.css";
export default function HtmlHeroSection() {
  return (
    <>
      <div className="herosection-container">
        <h1>HTML Tutorial</h1>
        <h3>
          <i className="fab fa-html5 fa-10x" />
        </h3>
        <div className="text">
          <h2>WHAT IS HTML ?</h2>
          <li>HTML stands for Hyper Text Markup Language </li>
          <li>HTML is the standard markup language for creating Web pages </li>
          <li>HTML describes the structure of a Web page </li>
          <li>HTML consists of a series of elements </li>
          <li>HTML elements tell the browser how to display the content </li>
          <li>
            HTML elements label pieces of content such as "this is a heading",
            "this is a paragraph", "this is a link", etc.
          </li>
        </div>
      </div>
    </>
  );
}
