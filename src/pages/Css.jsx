import React from 'react';
import '../App.css';
import '../assets/CSS/Css.css'

export default function About(){
    return (
        <>

        <div className="css-container">
            <div className="css-section">
            <h1>CSS Tutorial</h1>
                <h3>
                <i class="fab fa-css3-alt fa-10x"></i>
          </h3>
            <div className="css-text">
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
            <h1>Easy Learning with CSS "Try it Yourself"</h1>



            <button>Try YouSelf</button>
        </div>


        </>
    )
};