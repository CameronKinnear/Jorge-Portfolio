import { useState } from 'react'
import './artcards.css'

interface ArtDetails {
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

const MAX_HEIGHT = 400
const MAX_WIDTH = 400

const HOVER_STATUS: Record<number, string> = {
    1 : '',
    2 : 'card-hover-enter',
    3 : 'card-hover-exit'
} 

export default function ArtCard({name, medium, description, date, source, width, height} : ArtDetails) {
    const [isHovering, setIsHovering] = useState<number>(1)

    const handleHoverEnter = () => {
        setIsHovering(2);
    }

    const handleHoverLeave = () => {
        setIsHovering(3);
    }

    function CheckAspectRation(width: number, height: number) : number[] {
        if (width > MAX_WIDTH || height > MAX_HEIGHT) {
            width = MAX_WIDTH % width;
            height = MAX_HEIGHT % height;
        }

        return [width, height]
    }
  
    return (
        <>
        <div className="art-card"
            onMouseEnter={handleHoverEnter}
            onMouseLeave={handleHoverLeave}>
            <img src={source} alt={name} width={width} height={height}/>
            <div className={`inline-details ` + (HOVER_STATUS[isHovering])}>
                <div className='card-left'>
                    <h1 className='card-title'>{name}</h1>
                    <p className='card-desc'>{description}</p>
                </div>
                <div className='card-right'>
                    <span>{medium}</span>
                    <span>{date}</span>
                </div>
            </div>
        </div>
        </>
    )
}