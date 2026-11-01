import Title from '../components/Title'
import NavigationBar from '../components/NavigationBar'
import About from '../pages/subpages/About'
import '../style/mainpage.css'
import '../style/subpage.css'

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