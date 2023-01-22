import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from '../Context'


function Header() {
    const {cartItems} = useContext(Context) 
    const bagIcon = cartItems.length > 0 ? "/assets/shopping-bag-full.svg" : "/assets/shopping-bag-empty.svg"


    return (
        <>
            <header className="shadow-lg p-4 text-white sticky top-0 z-50 bg-white fade-in-image">
                <div className="flex justify-between items-center max-w-screen-xl mx-auto">
                    <Link to="/">
                        <img className="w-full max-h-24" src="/assets/PS-logo.svg" />
                    </Link>
                    <Link className="border-0" to="/cart">
                        <img className="bag h-12 w-12 bg-no-repeat bg-center" src={`${bagIcon}`}/>
                    </Link>
                </div>
            </header>

        </>
    )
}

export default Header
