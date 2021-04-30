import React,{useState, useEffect} from 'react'
import Editor from "../components/Editor";
export default function HtmlEditor({statemessage}) {

    const [currenthtml, setcurrenthtml] = useState (`${statemessage}`);

const  [srcDoc, setsrcDoc] = useState("");

    useEffect(() => {
        setsrcDoc(`${currenthtml}`)
    }, [currenthtml])
    return (
        <>
        <div className="pane">
              <Editor
                language="xml"
                displayName="HTML"
                value={currenthtml}
                onChange={setcurrenthtml}
              />
            </div>
            <div className="pane">
              <iframe
                srcDoc={srcDoc}
                title="output"
                sandbox="allow-scripts"
                frameborder="0"
                width="50%"
                height="50%"
              />
            </div>
        </>
    )
}
