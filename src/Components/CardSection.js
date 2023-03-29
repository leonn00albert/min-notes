import { useEffect, useState } from "react";
import Note from "../Util/Note";
import { Card } from "./Card"

export const CardSection = ({search}) => {
    const [update, setUpdate] = useState(false);
    const [notes, setNotes] = useState(Object.values(localStorage).map(note => JSON.parse(note)))

    const deleteNote  = (id) => {
        localStorage.removeItem(id);
        setUpdate(!update);

      }
    const duplicateNote  = (note) => {
        note.id = note.id + Object.values(localStorage).length;
        localStorage.setItem(note.id, JSON.stringify(new Note(note.title,note.content,note.id)));
        setUpdate(!update);
      }
    
      useEffect(() => {

        if(search.length > 2){
            setNotes(Object.values(localStorage).map(note => JSON.parse(note)).filter(note => note.content.toLowerCase().includes(search) || note.title.toLowerCase().includes(search)))
          
    
        }
        else {
            setNotes(Object.values(localStorage).map(note => JSON.parse(note)));
    
        }
      },[update])

    return (
        
        <div className="card-section">
                {notes.map((note, i) =>  <Card duplicateNote={duplicateNote} deleteNote={deleteNote} note={note} key={i} />)}
                
         </div>
           
      
    )
}