import { useEffect, useState } from "react";
import sanitize from "sanitize-html";
import { TextEditor } from "./TextEditor"
import { Toolbar } from "./ToolBar"

export function Editor({ handleShow, createNote }) {
    const [content, setContent] = useState({});
    const [title, setTitle] = useState("");
    const [save, setSave] = useState(false);
    const handleSave = () => {
        setSave(true);
       if(title === ""){
        createNote("New note", sanitize(content));
       }else {
        createNote(title, sanitize(content));

       }
    }

    const getContent = (val) => {
        setContent(val);
    }
    const getTitle = (event) => {
        setTitle(event.target.value)
    }

    const saveMessage = () => {
        if(save) {
            return (
                <div className="card save-message">
                    Saved
                </div>
            )
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setSave(false);
          }, 1500);
          return () => clearTimeout(timer);
    }, [save])


    return (
        <div className="editor container">
            <Toolbar handleSave={handleSave} value={title} handleShow={handleShow} handleChange={getTitle} />
            <TextEditor value={content} handleChange={getContent} />
            {saveMessage()}
         
        </div>
    )
}