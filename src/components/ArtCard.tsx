interface ArtInfoProps {
    source?: string,
    name: string,
    desc: string,
    date: Date
    width?: number,
    height?: number
}

export default function ArtCard({source = "./art/placeholder.png", name, desc, date, width = 600, height = 400} : ArtInfoProps) {
    return (
        <>
        <div className="art-card">
            <img src={source} alt={name} width={width} height={height}/>
            <h1>{name}</h1>
            <p>{desc}</p>
            <span>{date.toDateString()}</span>
        </div>
        </>
    )
}