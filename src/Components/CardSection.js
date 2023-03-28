import { Card } from "./Card"

export const CardSection = ({notes}) => {
    return (
        
        <div className="card-section">
                {notes.map(note =>  <Card note={note} />)}
                
         </div>
           
      
    )
}