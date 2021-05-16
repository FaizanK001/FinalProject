import React from "react";
import "../assets/CSS/CssHeroSection.css";
export default function CssHeroSection() {
  return (
    <>
      <div className="css-container">
        <h1>CSS Tutorial</h1>
        <h3>
          <i className="fab fa-css3-alt fa-10x"></i>
        </h3>

        <div className="css-text-container">
          <h2>WHAT IS CSS ?</h2>
          <li>CSS is the language we use to style an HTML document. </li>
          <li>CSS describes how HTML elements should be displayed. </li>
          <li>This tutorial will teach you CSS from basic to advanced.</li>
          <li>CSS stands for Cascading Style Sheets</li>
          <li>
            CSS describes how HTML elements are to be displayed on screen,
            paper, or in other media{" "}
          </li>
          <li>
            CSS saves a lot of work. It can control the layout of multiple web
            pages all at once
          </li>
          <li>External stylesheets are stored in CSS files</li>
          <p></p>
        </div>
      </div>
    </>
  );
}
