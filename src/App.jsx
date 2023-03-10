import React, {useContext} from "react"
import {Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Items from "./pages/Items"
import ItemPage from "./pages/ItemPage"

function App() {    

    return (
        <div>
            <Header />

            <Routes>
                <Route exact path="/private-sale-ecomm/" element={<Items />} />
                <Route exact path="/private-sale-ecomm/cart" element={<Cart />} />

                <Route path='/private-sale-ecomm/:itemId' element={<ItemPage />}>
                </Route>

            </Routes>
        </div>

    )
}

export default App