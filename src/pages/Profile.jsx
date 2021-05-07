import React from 'react'
import ProfileComp from '../components/ProfileComp';
import HtmlQuiz from '../components/HtmlQuiz'
import CssQuiz from '../components/CssQuiz'
import JsQuiz from '../components/JsQuiz'
import Footer from '../components/Footer'
export default function Profile() {
    return (
        <>
            <ProfileComp/>
            <HtmlQuiz/>
            <CssQuiz/>
            <JsQuiz/>
           <Footer/>
        </>
    )
}
