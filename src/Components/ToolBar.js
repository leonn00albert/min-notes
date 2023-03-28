import { useState } from "react"

export function Toolbar({handleShow}) {
    const [icon, setIcon] = useState({type: "check", html: <i className="fa fa-check"></i>});
    const handeClick = ()=> {
        if(icon.type === "check"){
            setIcon({type: "arrow-left", html: <i className="fa fa-arrow-left"></i>})
        }
        if(icon.type === "arrow-left"){ 
            handleShow();
        }}


    return (

        <div className="file-name-section">
        <button onClick={handeClick} className="file-save-button circle-button">{icon.html}</button>
        <input type="text" className="file-name-input" placeholder="New note" />
         </div>
    )
}