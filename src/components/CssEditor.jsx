import React, { useState, useEffect } from "react";
import Editor from "../components/Editor";
import "../assets/CSS/Popup.css";
import "../assets/CSS/Editor.css";

export default function CssEditor({ statemessage }) {
  const [currentcss, setcurrentcss] = useState(`${statemessage}`);

  const [srcDoc, setsrcDoc] = useState("");

  useEffect(() => {
    setsrcDoc(`${currentcss}`);
  }, [currentcss]);
  return (
    <>
      <div className="pane">
        <Editor
          language="css"
          displayName="HTML"
          value={currentcss}
          onChange={setcurrentcss}
        />
      </div>
      <div className="i-pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameborder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}
