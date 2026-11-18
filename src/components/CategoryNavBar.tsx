import { useState } from 'react';
import './categorynavbar.css'

interface Categories {
    categories: string[]
}




export default function CategoryNavBar({categories} : Categories) {

    var navElemWidth = 100 / categories.length

    const elementStyle = {
        width : `${navElemWidth}%`
    }
    console.log(navElemWidth)
    return (
        <>
        <div className="category-bar">
            {
                categories.map((category) => {
                    
                    return (
                        <div className="nav-element" style={elementStyle}>
                            <button>
                                {category}
                            </button>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export function GetCategories() {

}