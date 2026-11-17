import { useEffect, useState } from "react"
import ArtCard from "../../components/ArtCard"

interface ArtData {
    // Metadata
    id: number,
    source: string,
    width?: number,
    height?: number

    // Display
    name?: string,
    medium?: string
    description?: string,
    date?: string,
}
function Art() {

    const [artData, setArtData] = useState<ArtData[]>([]);

    // Fetch the art-data json file
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/art-data.json');

                if (!res.ok) throw new Error("HTTP Error");

                const data: ArtData[] = await res.json();
                setArtData(data);
            }
            catch {
                
            }
            finally {

            }
        }

        fetchData();
        console.log(artData)
    })

    return (
        <>
        <div className="art-display">
            <>
            {
                artData.map((art) => {
                    <ArtCard key={art.id} id={art.id} source={art.source} 
                             width={art.width} height={art.height}
                             name={art.name} description={art.description}
                             medium={art.medium} date={art.date}/>
                })
            }
            </>
        </div>
        </>
    )
}

export default Art