import React, { useState, useEffect } from "react";
import fire from "../firebase/firebase";

export default function ProfileComp() {
  const [currentuser, setcurrentuser] = useState();
  useEffect(() => {
    fire.auth().onAuthStateChanged((currentuser) => {
      setcurrentuser(currentuser);
    });
  }, []);

  return (
    <section className="container-banner">
      <h1>
        <i className="fas fa-dragon fa-10x" />
      </h1>

      {currentuser && <h1> WELCOME {currentuser.email}! </h1>}
      <h2>Please Complete the Following Quizzes !</h2>
    </section>
  );
}
