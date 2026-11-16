import ArtCard from "../../components/ArtCard"

function Art() {
    return (
        <>
        <div className="art-display">
            <ArtCard source='./art/placeholder_h.png' name="Piece Name" description="This is a description of this piece of art. It is beautiful. this is to test if the max height feature really stops at 20%" date='12/12/12'/>
        </div>
        </>
    )
}

export default Art