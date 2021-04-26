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
              text="Pratice HTML"
              label="HTML"
              path="/Html"
            />

            <CardItem
              src="/images/image-script.png"
              text="Pratice CSS "
              label="CSS"
              path="/Css"
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
