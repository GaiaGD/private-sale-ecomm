import React, {useState, useEffect} from 'react'
const Context = React.createContext()


function ContextProvider({children}) {
    const [itemsArray, setItemsArray] = useState([])
    const [cartItems, setCartItems] = useState([])


    useEffect(() => {
        console.log("hi context")

        // on loading, checking that localcart is empty - using getItems. If found, we parse the string found inside it
        if (window.localStorage.getItem('itemsInCart')){
            console.log('you have items in cart')
            setCartItems(JSON.parse(localStorage.getItem('itemsInCart')))
        } else
        // an empty localStorage is not an array, so it breaks the cartItems element passed to components with context. We set as empty array
        {
            console.log('you dont have items in your cart')
            setCartItems([])
        }

    }, [])


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => {
            let itemsEdits = data.map(item => (
                {...item, isFavorite: false}
                // THIS ADDS isFavorite - PLEASE DON'T DO THIS IF YOU'RE GOING TO CREATE YOUR OWN JSON OF PRODUCTS
            ))
            setItemsArray(itemsEdits)
        })
    }, [])

    function toggleFavorite(hovered){
        let newArray = itemsArray.map(item => {
            if(item.id === hovered){
                return {...item, isFavorite: !item.isFavorite}
            } else {
                return item
            }
        })
        setItemsArray(newArray)
    }

    // both add and remove, first save on localStorage, then on stage. so localstoreg is only touched on context

    function addToCart(newItem){

        let cartAndNewItem = [...cartItems, newItem]
        window.localStorage.setItem('itemsInCart', JSON.stringify(cartAndNewItem))
        let itemsInCart = window.localStorage.getItem('itemsInCart')

        setCartItems(JSON.parse(itemsInCart))
    }


    function removeFromCart(idItemToRemove){
        window.localStorage.setItem('itemsInCart', JSON.stringify(cartItems.filter(item => item.id !== idItemToRemove)))
        let itemsInCart = window.localStorage.getItem('itemsInCart')
        setCartItems(JSON.parse(itemsInCart))
    }

    function emptyCart() {
        setCartItems([])
        localStorage.clear()
    }
    
    return (
        <Context.Provider value={{itemsArray, cartItems, toggleFavorite, addToCart, removeFromCart, emptyCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}