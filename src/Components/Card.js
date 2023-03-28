export const Card = ({note}) => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="card-header">
                    <p className="card-date">{note.date}</p>
                    <p> <i className="fa fa-ellipsis-v"></i>  </p>
                </div>
                <p className="card-title"> {note.title} </p>
                <p className="card-content">{note.content}</p>
            </div>

        </div>
    )
}