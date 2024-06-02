import React from 'react'
import './Cart.css'

const OrderedDelivered = (props) => {
  return (
    <>
        <div>
            <h2>Thank you so much for your order</h2>
            <p>Enjoy <b>20%</b> off on your next purchase with this coupon:</p>
            <p>WELCOME20</p>
        </div>
        <div className="action">
            <button className="button" onClick={props.onClose}>Close</button>
        </div>
    </>
  )
}

export default OrderedDelivered;