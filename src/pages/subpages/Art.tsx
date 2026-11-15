import ArtCard from "../../components/ArtCard"

function Art() {
    return (
        <>
        <div className="art-display">
            <ArtCard name="name" desc="desc" date={new Date("12/12/12")}/>
        </div>
        </>
    )
}

export default Art