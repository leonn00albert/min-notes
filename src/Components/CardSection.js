import { Card } from "./Card"

export const CardSection = ({search}) => {
    let notes;
    if(search.length > 2){
         notes = Object.values(localStorage).map(note => JSON.parse(note)).filter(note => note.content.toLowerCase().includes(search) || note.title.toLowerCase().includes(search));

    }
    else {
        notes = Object.values(localStorage).map(note => JSON.parse(note));

    }
    

    return (
        
        <div className="card-section">
                {notes.map(note =>  <Card note={note} />)}
                
         </div>
           
      
    )
}