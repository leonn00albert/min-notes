export const Card = ({note}) => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="card-header">
                    <p className="card-date">{new Date(note.date).toDateString()}</p>
                    <p> <i className="fa fa-ellipsis-v"></i>  </p>
                </div>
                <p className="card-title"> {note.title} </p>
                <p className="card-content" dangerouslySetInnerHTML={{__html: note.content}}></p>
            </div>

        </div>
    )
}