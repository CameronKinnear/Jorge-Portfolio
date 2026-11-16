import ArtCard from "../../components/ArtCard"

function Art() {
    return (
        <>
        <div className="art-display">
            <ArtCard name="Piece Name" desc="This is a description of this piece of art. It is beautiful. this is to test if the max height feature really stops at 20%" date={new Date("12/12/12")}/>
        </div>
        </>
    )
}

export default Art