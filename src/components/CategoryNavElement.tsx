interface Category {
    category: string
}


export default function CategoryNavElement({category} : Category) {
    return (
        <>
        <div className="nav-element">
            {category}
        </div>
        </>
    )
}