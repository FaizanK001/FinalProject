import React from "react";
import CardItem from "./CardItem";
import "../assets/CSS/Card.css";

function Card() {
  return (
    <div className="cards">
      <h1>Programming Langauges</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/image-html.jpg"
              text="Pratice with HTML"
              label="HTML"
              path="/services"
            />

            <CardItem
              src="/images/image-script.png"
              text="Pratice with JavaScript "
              label="JavaScript"
              path="/services"
            />

            <CardItem
              src="/images/img-php.png"
              text="Pratice With PHP"
              label="PHP"
              path="/services"
            />
          </ul>
          <ul className="cards__items"></ul>

        </div>
      </div>
    </div>
  );
}

export default Card;
