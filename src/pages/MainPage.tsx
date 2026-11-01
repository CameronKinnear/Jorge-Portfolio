import Title from '../components/Title'
import NavigationBar from '../components/NavigationBar'
import About from '../pages/subpages/About'
import './mainpage.css'
import './subpage.css'

function MainPage() {
    var selectedPage = <About />;

    return (
        <>
            <Title />
            <NavigationBar />
            <div id="subpage-basic">
                {selectedPage}
            </div>
        </>
    )
}

export default MainPage