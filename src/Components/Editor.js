import { TextEditor } from "./TextEditor"
import { Toolbar } from "./ToolBar"

export function Editor() {
    return (
        <div className="editor container">
            <Toolbar />
            <TextEditor />
        </div>
    )
}