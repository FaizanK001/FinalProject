import React from "react";
import CardItem from "./CardItem";
import "../assets/CSS/Card.css";

function Card() {
  return (
    <div className="cards">
      <h1 >Programming Langauges</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/html.jpg"
              text="Pratice with HTML"
              label="HTML"
              path="/Html"
            />

            <CardItem
              src="/images/js.png"
              text="Pratice with JavaScript "
              label="JavaScript"
              path="/Javascript"
            />

            <CardItem
              src="/images/css.jpg"
              text="Pratice With CSS"
              label="CSS"
              path="/Css"
            />
          </ul>
          <ul className="cards__items"></ul>

        </div>
      </div>
    </div>
  );
}

export default Card;
