import '../style/global.css'
import './navbar.css'
import Art from '../pages/subpages/Art'
import About from '../pages/subpages/About'
import Contact from '../pages/subpages/Contact'
import Resume from '../pages/subpages/Resume'
import React, { useState } from 'react';

interface PageProps {
  SelectPage: (page: React.ReactNode) => void;
}

function NavigationBar({ SelectPage } : PageProps) {
    const numOfButtons = 4;
    const widthPerButton : Number = 100 / numOfButtons;

    const [isActive, UpdateActiveButton] = useState<String>("About");

    const NavSelect = (pageName: String,page : React.ReactNode) => {
        SelectPage(page);
        UpdateActiveButton(pageName);
    }

    return (
        <div id="nav-bar" className="flex-row">
            <div className="nav-button-div" style={{width : widthPerButton + "%"}}>
                <button className={`${isActive == "Art" ? "nav-selected" : ""} nav-button`} 
                onClick={() => NavSelect("Art", <Art />)} 
                value="Art">Art</button>
            </div>
            <div className="nav-button-div" style={{width : widthPerButton + "%"}}>
                <button className={`${isActive == "About" ? "nav-selected" : ""} nav-button`} 
                onClick={() => NavSelect("About", <About />)} 
                value="About">About</button>
            </div>
            <div className="nav-button-div" style={{width : widthPerButton + "%"}}>
                <button className={`${isActive == "Resume" ? "nav-selected" : ""} nav-button`}
                onClick={() => NavSelect("Resume", <Resume />)} 
                value="Resume">Resume</button>
            </div>
            <div className="nav-button-div" style={{width : widthPerButton + "%"}}>
                <button className={`${isActive == "Contact" ? "nav-selected" : ""} nav-button`}
                onClick={() => NavSelect("Contact", <Contact />)} 
                value="Contact">Contact</button>
            </div>
        </div>
    )
}

export default NavigationBar