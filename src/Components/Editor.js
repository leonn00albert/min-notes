import { useState } from "react";
import { TextEditor } from "./TextEditor"
import { Toolbar } from "./ToolBar"

export function Editor({handleShow, createNote}) {
    const [content, setContent] = useState({});
    const [title, setTitle] = useState("");

    const handleSave = () => {
        createNote(title,content);

    }

    const getContent = (val) => {
        setContent(val)
    }
    const getTitle = (event) =>{
        setTitle(event.target.value)
    }

 
    return (
        <div className="editor container">
            <Toolbar handleSave={handleSave} value={title} handleShow={handleShow} handleChange={getTitle}/>
            <TextEditor  value={content} handleChange={getContent}/>
        </div>
    )
}