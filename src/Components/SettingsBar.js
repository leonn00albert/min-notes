export const SettingsBar = ({handleShow}) => {
    const handeClick = () => {
        handleShow()
    }
    return (
        <div className="settings-bar">
        <h2>
            My notes
        </h2>
        <div className="settings-button-group">
        <button onClick={handeClick} className="file-save-button circle-button">
        <i className="fa fa-plus"></i>
            </button>
        <button onClick={handeClick} className="file-save-button circle-button">
        <i className="fa fa-gear"></i>
            </button>
       
        </div>
    </div>
    )

}