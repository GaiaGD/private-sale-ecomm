import React, {useContext} from "react"
import {Context} from "../Context"
import Item from "../components/Item"

function Items() {
    const {itemsArray} = useContext(Context)

    let allItems = itemsArray.map((item, i) => {
        return(
            <Item
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            category={item.category}
            image={item.image}
            rating={item.rating}
            key={item.id}
            isFavorite={item.isFavorite}
            />
        )
    })


    return (
        itemsArray.length > 0 ?
            <main className="max-w-screen-xl mx-auto p-4 grid md:grid-cols-4 grid-cols-2 lg:gap-16 gap-4 z-0 fade-in-image">
                {allItems}
            </main>
        :
        <img className="w-full max-h-24 mt-28 animate-spin" src="/assets/PS-logo.svg" />
    )
}

export default Items