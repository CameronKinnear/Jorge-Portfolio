import CategoryNavElement from "./CategoryNavElement"

interface Categories {
    categories: string[]
}


export default function CategoryNavBar({categories} : Categories) {
    return (
        <>
        <div className="category-bar">
            {
                categories.map((category) => {
                    
                    return (
                        <>
                            <CategoryNavElement category={category}/>
                        </>
                    )
                })
            }
        </div>
        </>
    )
}

export function GetCategories() {

}