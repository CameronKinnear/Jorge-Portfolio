import '../style/global.css'
import '../style/mainpage.css'
function NavigationBar() {

    return (
        <div id="nav-bar" className="flex-row">
            <button className="nav-button" value="About">About</button>
            <button className="nav-button" value="Art">Art</button>
            <button className="nav-button" value="Resume">Resume</button>
            <button className="nav-button" value="Contact">Contact</button>
        </div>
    )
}

export default NavigationBar