export const SearchBar = ({handleChange, value}) => {
    return (
        <div className="card search-bar">
             <i className="fa fa-search"></i>
            <input type="text" value={value} onChange={handleChange} placeholder="Start entering words for search" />
        </div>
    );
}