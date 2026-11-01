import '../style/global.css'
import '../style/mainpage.css'
function NavigationBar() {
    var numOfButtons = 4;
    var widthPerButton : Number = 100 / numOfButtons;
    return (
        <div id="nav-bar" className="flex-row">
            <div className="nav-button-div" style={{width : widthPerButton + "%"}}>
                <button className="nav-button" value="Art">Art</button>
            </div>
            <div className="nav-button-div" style={{width : widthPerButton + "%"}}>
                <button className="nav-button" value="About">About</button>
            </div>
            <div className="nav-button-div" style={{width : widthPerButton + "%"}}>
                <button className="nav-button" value="Resume">Resume</button>
            </div>
            <div className="nav-button-div" style={{width : widthPerButton + "%"}}>
                <button className="nav-button" value="Contact">Contact</button>
            </div>
            
            
            
        </div>
    )
}

export default NavigationBar