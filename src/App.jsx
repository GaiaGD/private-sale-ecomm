import React, {useContext} from "react"
import {Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Items from "./pages/Items"
import ItemPage from "./pages/ItemPage"

function App() {    
    console.log("hi app")

    return (
        <div>
            <Header />

            <Routes>
                <Route exact path="/" element={<Items />} />
                <Route exact path="/cart" element={<Cart />} />

                <Route path=':itemId' element={<ItemPage />}>
                </Route>

            </Routes>
        </div>

    )
}

export default App