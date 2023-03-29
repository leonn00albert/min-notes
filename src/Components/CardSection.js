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

      const pinNote  = (note) => {
        note.isPinned = !note.isPinned;
        localStorage.setItem(note.id, JSON.stringify(note));
        setUpdate(!update);
      }
    
      useEffect(() => {
            let locals = Object.values(localStorage).map(note => JSON.parse(note))
            locals.sort((a, b) => {
                if (a.isPinned && !b.isPinned) {
                  return -1;
                } else if (!a.isPinned && b.isPinned) {
                  return 1; 
                } else {
                  return 0; 
                }
              })
        if(search.length > 2){
            setNotes(locals.filter(note => note.content.toLowerCase().includes(search) || note.title.toLowerCase().includes(search)))
            
            
        }
        else {
            setNotes(locals);
    
        }
      },[update,search])

    return (
        
        <div className="card-section">
                {notes.map((note, i) =>  <Card pinNote={pinNote} duplicateNote={duplicateNote} deleteNote={deleteNote} note={note} key={i} />)}
                
         </div>
           
      
    )
}