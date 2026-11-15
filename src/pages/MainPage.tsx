import Title from '../components/Title'
import NavigationBar from '../components/NavigationBar'
import About from '../pages/subpages/About'
import { useState, type ReactNode } from 'react'
import './mainpage.css'
import './subpage.css'

function MainPage() {
    const [selectedPage, SelectPage] = useState<ReactNode>(<About />);

    return (
        <>
            <Title />
            <NavigationBar SelectPage={SelectPage}/>
            <div id="subpage-basic">
                {selectedPage}
            </div>
        </>
    )
}

export default MainPage