import { useEffect, useState } from "react"
import ArtCard from "../../components/ArtCard"
import './art.css'

interface ArtData {
    // Metadata
    id: number,
    source: string,
    width: number,
    height: number

    // Display
    name?: string,
    medium?: string
    description?: string,
    date?: string,
}

const MAX_HEIGHT = 400
const MAX_WIDTH = 400

function Art() {

    const [artData, setArtData] = useState<ArtData[]>([]);

    // Fetch the art-data json file
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/Jorge-Portfolio/artdata.json`);

                if (!res.ok) throw new Error("HTTP Error");

                const data: ArtData[] = await res.json();
                setArtData(Object.values(data));
            }
            catch {
                
            }
            finally {

            }
        }

        fetchData();
    }, []);

    function CheckAspectRatio(width: number, height: number) : Record<string, number> {

        // If any of the ratios are higher than they should be downscale
        if (width > MAX_WIDTH || height > MAX_HEIGHT) {
            const scale = Math.min((MAX_WIDTH / width), (MAX_HEIGHT / height))

            width *= scale
            height *= scale
        }

        // If the max is not 400 upscale so the largest is 400
        if (Math.max(width, height) != 400) {
            const scale = Math.min((MAX_WIDTH / width), (MAX_HEIGHT / height))

            width *= scale
            height *= scale
        }

        return {'width' : width, 'height' : height}
    }
  

    return (
        <>
        <div className="art-display">
            <>
            {
                
                artData.map((art) => {
                    const newRatio = CheckAspectRatio(art.width, art.height);
                    return (<div className="card">
                        <ArtCard key={art.id} id={art.id} source={art.source} 
                        width={newRatio['width']} height={newRatio['height']}
                        name={art.name} description={art.description}
                        medium={art.medium} date={art.date}/>
                    </div>)
                })
            }
            </>
        </div>
        </>
    )
}

export default Art