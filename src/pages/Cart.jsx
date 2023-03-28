import React, { useState, useContext } from "react"
import { Context } from '../Context'
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems, emptyCart, itemsArray} = useContext(Context) 
    const [buttonText, setButtonText] = useState("Place Order")

    const itemsInCartPage = cartItems.map(item => (
        <CartItem key={item.id} item={item} title={item.title} price={item.price}/>
    ))


    function totalCost(){
        if(itemsInCartPage.length > 0){
            let total = 0
            for(let i = 0; i < itemsInCartPage.length; i++){
                let itemCost = Number(itemsInCartPage[i].props.price)
                total += itemCost
            }
            return total.toLocaleString("en-US", {style: "currency", currency: "USD"})
        } else {
            return " $0"
        }
    }

    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("Order placed!")
            setButtonText("Place Order")
            emptyCart()
        }, 3000)
    }

    return (
        <main className="cart-page p-4 max-w-screen-xl mx-auto fade-in-image">
            <h1 className="font-bold text-2xl pt-8">YOUR CART</h1>
            {itemsInCartPage}
            {cartItems.length > 0 ? 
                <div>
                    <p className="total-cost">Total:  {totalCost()}</p>
                    <div className="order-button pt-16">
                        <button className="cursor-pointer p-4 border-2 border-black font-bold uppercase" onClick={placeOrder}>{buttonText}</button>
                    </div>
                </div> :
                <p className="text-center pt-32">You have no items in your cart</p>
            }
        </main>
    )
}

export default Cart