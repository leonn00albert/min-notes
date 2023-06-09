import { useRef, useState, useEffect} from "react"

export const Card = ({ note, deleteNote, duplicateNote, pinNote}) => {
    const [show,setShow] = useState({display: 'none'});
    const dropdownRef = useRef();
    const handleClick = () => {
        if(show.display === 'none') {
            setShow({display: 'block'});
        }

    }
    const showPin = (isPinned) => {
        if(isPinned) {
            return <i className="fa fa-thumb-tack"></i>;
        }
        
    }
    
    useEffect(() => {
        window.onclick = (event) => {
          if (event.target.contains(dropdownRef.current)
            && event.target !== dropdownRef.current) {     
                setShow({display: 'none'});
          } 
     

        }
    }, [show]);

    return (
        <div className="card">
            <div className="card-body">
                <div className="card-header">
                    <p className="card-date">{new Date(note.date).toDateString()}</p>
                    <p className="drop-down" onClick={handleClick} > 
                     {showPin(note.isPinned)}
                    <i className="fa fa-ellipsis-v"></i>
                        <div id="myDropdown" className="dropdown-content" style={show} ref={dropdownRef}>
                            <a onClick={() =>{setShow({display: 'none'});  pinNote(note)}}>{!note.isPinned ? "Pin to the top" : "Unpin"} </a>
                            <a onClick={() =>{setShow({display: 'none'});  duplicateNote(note)}}>Duplicate</a>
                            <a href="#" onClick={()=> deleteNote(note.id)}>Delete</a>
                        </div>
                    </p>
                </div>
                <p className="card-title"> {note.title} </p>
                <p className="card-content" dangerouslySetInnerHTML={{ __html: note.content }}></p>
            </div>

        </div>
    )
}