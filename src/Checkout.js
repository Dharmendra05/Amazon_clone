import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://www.helium10.com/app/uploads/2018/12/Banner-Amazon-Advertising-Marketing-Guide-01.png" />
                <div>
                    <h2 className="checkout_title">
                        Your Shopping Basket
                    </h2>
                </div>
            </div>

            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
