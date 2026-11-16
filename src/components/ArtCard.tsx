import { useState } from 'react'
import './artcards.css'

interface ArtInfoProps {
    source?: string,
    medium?: string
    name?: string,
    desc?: string,
    date: Date,
    width?: number,
    height?: number
}

const HOVER_STATUS: Record<number, string> = {
    1 : '',
    2 : 'card-hover-enter',
    3 : 'card-hover-exit'
} 

export default function ArtCard({source = "./art/placeholder.png", medium = "Oil on canvas. 4 x 3", name, desc, date, width = 400, height = 300} : ArtInfoProps) {
    const [isHovering, setIsHovering] = useState<number>(1)

    const handleHoverEnter = () => {
        setIsHovering(2);
    }

    const handleHoverLeave = () => {
        setIsHovering(3);
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
                    <p className='card-desc'>{desc}</p>
                </div>
                <div className='card-right'>
                    <span>{medium}</span>
                    <span>{date.toDateString()}</span>
                </div>
                
            </div>
            
        </div>
        </>
    )
}