import { useEffect, useRef, useState } from "react";
const lightTheme = {
    '--color-text': '#31456A',
    '--color-border': '#FFFFFF',
    '--color-accent': '#069DB7',
    '--color-accent-light': '#CDEBF1',
    '--color-primary-button': '#069DB7',
    '--color-editor-controls': '#31456A',
    '--bg-card': '#F9F9F9',
    '--bg-card-menu': '#FFFFFF',
    '--bg-common': '#F2F2F2',
    '--bg-slider-dot': '#FFFFFF',
    '--bg-primary-button': '#F9F9F9',
    '--bg-modal-overlay': 'rgba(255, 255, 255, 0.5)',
    '--box-shadow-common': '5px 5px 16px rgba(136, 165, 191, 0.25)',
  };

  const darkTheme = {
    '--color-text': '#FFFFFF',
    '--color-border': '#2C2C2C',
    '--color-accent': '#FFFFFF',
    '--color-accent-light': '#3F3F3F',
    '--color-primary-button': '#FFFFFF',
    '--color-editor-controls': '#9CAABF',
    '--bg-card': '#272727',
    '--bg-card-menu': '#353535',
    '--bg-common': '#202020',
    '--bg-slider-dot': '#9CAABF',
    '--bg-primary-button': '#31456A',
    '--bg-modal-overlay': 'rgba(0, 0, 0, 0.5)',
    '--box-shadow-common': '5px 5px 16px rgba(0, 0, 0, 0.25)'
  };
export const SettingsBar = ({ handleShow }) => {

    const [show, setShow] = useState({ display: 'none' });
    const [theme, setTheme] = useState("light");
    const dropdownRef = useRef();
    const showSettings = () => {
        if (show.display === 'none') {
            setShow({ display: 'block' });
        }
    }

        

    const changeTheme = () => {
        if(theme==="light"){
            for (let style in darkTheme) {
                document.documentElement.style.setProperty(style, darkTheme[style]);
            }
            setTheme('dark');
        }
        if(theme==='dark') {
            for (let style in darkTheme) {
                document.documentElement.style.setProperty(style, lightTheme[style]);
            }
            setTheme('light');
        }
    
 
    }

    const handeClick = () => {
        handleShow()
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
        <div className="settings-bar">
            <h2>
                My notes
            </h2>
            <div className="settings-button-group">
                <button onClick={handeClick} className="file-save-button circle-button">
                    <i className="fa fa-plus"></i>
                </button>
                <div className="drop-down setting">
                    <button onClick={showSettings} className="file-save-button circle-button">
                        <i className="fa fa-gear"></i>
                    </button>
                    <div id="myDropdown" className="dropdown-content" style={show} ref={dropdownRef}>

                        <a className="setting">
                            <span>Switch theme</span>
                            <div className="flipswitch">
                                <input type="checkbox" onChange={changeTheme} name="flipswitch" className="flipswitch-cb" id="fs" />
                                <label className="flipswitch-label" htmlFor="fs">
                                    <div className="flipswitch-inner"></div>
                                    <div className="flipswitch-switch"></div>
                                </label>
                            </div>

                        </a>
                    </div>
                </div>

            </div>
        </div>
    )

}