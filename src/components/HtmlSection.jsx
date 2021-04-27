/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../App.css'
import '../assets/CSS/htmlsection.css'

export default function HtmlSection({
    lightBg,
    topLine,
    lightText,
    lighTextDesc,
    headline,
    description,
    img,
    alt,
    imgStart

}) {
    return (
        <>
            <div className={lightBg ? 'html_sectioon' : 'home_section darkBg'}>
                <div className="container">
                    <div className="row_section" style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}>
                        <div className="col">
                            <div className="text_wrapper">
                                <div className="top-line">{topLine}</div>
                                <h1>{headline}</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            

            
           
            
        </>
    )
}
