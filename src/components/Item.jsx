import React, {useContext, useState} from 'react'
import {Context} from '../Context'
import {Link} from "react-router-dom"

import useHover from "../hooks/useHover"

function Item(item){
    const [hovered, ref] = useHover()
    const {cartItems, toggleFavorite, addToCart, removeFromCart} = useContext(Context)

    let heartEmpty = "/private-sale-ecomm/assets/notFavorite.svg"
    let heartFull = "/private-sale-ecomm/assets/isFavorite.svg"

    let addToCartPlus = "/private-sale-ecomm/assets/add-to-cart.svg"
    let addedToCart = "/private-sale-ecomm/assets/shopping-bag-full.svg"

    function heartIcon() {

        if(item.isFavorite) {
            return <img className="absolute h-4" src={`${heartFull}`} onClick={() => toggleFavorite(item.id)} />
        }

        else if(hovered) {
            return <img className="absolute h-4" src={`${heartEmpty}`} onClick={() => toggleFavorite(item.id)}/>
        }
    }

    function cartIcon(itemId){
        if (cartItems.some(itemInCart => itemInCart.id === itemId)){
            return <img className="absolute h-4 right-0" src={`${addedToCart}`} onClick={() => removeFromCart(itemId)} />
        }
        else if(hovered){
            return <img className="absolute h-4 right-0" src={`${addToCartPlus}`} onClick={() => addToCart(item)} />
        }
    }

    return (
        <div className='pt-10 md:px-4 px-2 hover:text-pink-600'>
            <div ref={ref} className="relative md:h-64 h-56">
                {heartIcon()}
                {cartIcon(item.id)}
                <div className='flex items-center justify-center h-full'>
                    <img src={item.image} className="md:p-4 md:max-h-64 max-h-56" />
                </div>
            </div>
            <Link to={`/${item.id}`}>
                <div className='w-full max-h-64'>
                    <h3 className='font-bold md:text-base text-sm uppercase'>{item.title}</h3>
                    <h3 className='text-sm text-right pt-4'>{(item.price).toLocaleString("en-US", {style: "currency", currency: "USD"})}</h3>
                </div>
            </Link>
        </div>
    )

}

export default Item