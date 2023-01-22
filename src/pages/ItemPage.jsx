import React, {useContext, useState} from 'react'
import {Context} from '../Context'
import {useParams} from "react-router-dom"

function ItemPage(props) {
    const {itemId} = useParams()

    const {cartItems, itemsArray, addToCart, removeFromCart} = useContext(Context)

    let itemDetails = itemsArray.find(item => item.id === parseFloat(itemId))
    
    function buttonItemPage(itemId){
        if (cartItems.some(itemInCart => itemInCart.id === itemId)){
            return (
                    <button className="cursor-pointer p-4 border-2 border-black font-bold uppercase mt-8" onClick={() => removeFromCart(itemDetails.id)} >
                        Remove from cart
                    </button>
                )
        }
        else {
            return (
                <button className="cursor-pointer p-4 border-2 border-black font-bold uppercase mt-8" onClick={() => addToCart(itemDetails)} >
                    Add to cart
                </button>
            )
        }
    }

    return (
        itemsArray.length > 0 ?
            <main className="max-w-screen-xl mx-auto p-4 fade-in-image">
                <div className='md:flex'>
                    <div className='md:w-1/2 md:p-40 p-8'>
                        <img src={itemDetails.image} />
                    </div>
                    <div className='md:w-1/2 p-4'>
                        <h1 className="font-bold text-sm uppercase md:pt-8 font-light">{itemDetails.category}</h1>
                        <h1 className="font-bold text-2xl uppercase md:pt-4 pt-2">{itemDetails.title}</h1>
                        <h1 className="text-xl pt-4">{(itemDetails.price).toLocaleString("en-US", {style: "currency", currency: "USD"})}</h1>
                        <h1 className="text-sm pt-8">{itemDetails.description}</h1>
                        {buttonItemPage(itemDetails.id)}
                        {/* <button className="cursor-pointer p-4 border-2 border-black font-bold uppercase mt-8" onClick={() => addToCart(itemDetails)} >
                            Add to cart
                        </button> */}

                    </div>
                </div>
            </main>
        :
            <img className="w-full max-h-24 mt-28 animate-spin" src="/assets/PS-logo.svg" />
    )
}

export default ItemPage