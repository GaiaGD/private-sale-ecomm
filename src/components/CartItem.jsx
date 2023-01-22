import React, {useState, useContext} from "react"
import {Context} from "../Context"
import useHover from "../hooks/useHover"

function CartItem({item}) {
    const [hovered, ref] = useHover()
    const {removeFromCart} = useContext(Context)
    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"
    return (
        <div className="flex justify-between items-center border-b-2 mb-4">
            <div className="md:flex items-center">
                <div className="flex items-center">
                    <i className={iconClassName} onClick={() => removeFromCart(item.id)} ref={ref} > </i>
                    
                    <img src={item.image} className="w-40 p-8 min-h-16"/>
                </div>
                <p className="font-bold pb-8 md:pb-0 uppercase">{item.title}</p>
            </div>
            <div>
                <p className="text-lg">{(item.price).toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
            </div>
        </div>
    )
}


export default CartItem