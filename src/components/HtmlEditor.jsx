import React,{useState} from 'react'
import Editor from "../components/Editor";
export default function HtmlEditor({props}) {

const  [html, setHtml] = useState();

    const srcDoc = `
    <html>
    <body>${html}</body>

    </html>
    
    `;
    return (
        <>
        <div className="pane">
              <Editor
                language="xml"
                displayName="HTML"
                value={html}
                onChange={setHtml}
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
