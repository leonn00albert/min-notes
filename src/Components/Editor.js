import { TextEditor } from "./TextEditor"
import { Toolbar } from "./ToolBar"

export function Editor({handleShow}) {
    return (
        <div className="editor container">
            <Toolbar handleShow={handleShow}/>
            <TextEditor />
        </div>
    )
}