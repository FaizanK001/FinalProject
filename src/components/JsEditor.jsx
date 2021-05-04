import React,{useState, useEffect} from 'react'
import Editor from "../components/Editor";
import '../assets/CSS/Popup.css'
import '../assets/CSS/Editor.css'

export default function JsEditor({statemessage}) {
    const [currentjs, setcurrentjs] = useState (`${statemessage}`);

    const  [srcDoc, setsrcDoc] = useState("");
    
        useEffect(() => {
            setsrcDoc(`${currentjs}`)
        }, [currentjs])
    return (
        <>
         <div className="pane">
              <Editor
                language="javascript"
                displayName="JS"
                value={currentjs}
                onChange={setcurrentjs}
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
    )
}
