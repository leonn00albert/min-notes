import { useState } from "react"

export function Toolbar() {
    const [icon, setIcon] = useState({type: "check", html: <i class="fa fa-check"></i>});
    const handeClick = ()=> {
        if(icon.type === "check"){
            setIcon({type: "arrow-left", html: <i class="fa fa-arrow-left"></i>})
        }
    }
    return (

        <div className="file-name-section">
        <button onClick={handeClick} className="file-save-button">{icon.html}</button>
        <input type="text" className="file-name-input" placeholder="New note" />
         </div>
    )
}