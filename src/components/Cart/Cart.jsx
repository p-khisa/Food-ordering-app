import React, { useContext, useState } from 'react'
import './Cart.css'
import Modal from '../MainUI/Modal';
import CartContext from '../../store/Cart-context';
import CartItem from './CartItem';
import OrderedDelivered from './OrderedDelivered';

const Cart = (props) => {

  const cartCtx = useContext(CartContext)
  const [ showOrder, setShowOrder ] = useState(false)

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const handleCartItemRemove = (id) => {
    cartCtx.removeItem(id)
  }

  const handleCartItemAdd = ( item ) => {
    cartCtx.addItem({ ...item, amount: 1})
  }

  const handleOrder = () => {
    cartCtx.clearAll()
    setShowOrder(true)
  }

  const cartItems = (
    <ul className="cart-items">
      {
        cartCtx.items.map((item) =>(
          <CartItem 
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={handleCartItemRemove.bind(null,  item.id)}
            onAdd={handleCartItemAdd.bind(null, item)}
          />
        ))
      }
    </ul>
  )

  return (
    <>
        <Modal onClose={props.onClose}>

          {
            !showOrder ? (
              <>
                {cartItems}
                <div className="total">
                  <span>Total Amount</span>
                  <span>{totalAmount}</span>
                </div>
                <div className="actions">
                  <button className="button--alt" onClick={props.onClose}>Close</button>
                  {
                    hasItems && (
                      <button className="button" onClick={handleOrder}>Order</button>
                    )
                  }
                </div>
              </>
              
            ) : (
              <OrderedDelivered onClose={props.onClose}/>
            )
          }
        </Modal>
    </>
  )
}

export default Cart;