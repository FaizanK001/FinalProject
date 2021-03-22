import React from 'react'
import CardItem from './CardItem'
import '../assets/CSS/Card.css'

function Card() {
    return (
        <div className='cards'>
            <h1>Programming Langauges</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        
                        <CardItem 
                        src="images/img-9.jpg"
                        text="Pratice with HTML"
                        label="HTML"
                        path="/services"/>

                        <CardItem 
                        src="images/img-2.jpg"
                        text="Pratice with JavaScript "
                        label="JavaScript"
                        path="/services"/>
                        
                        <CardItem 
                        src="images/img-3.jpg"
                        text="Pratice With PHP"
                        label="PHP"
                        path="/services"/>
                        
                        
                     </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
