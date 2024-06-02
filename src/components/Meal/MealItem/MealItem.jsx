import React, { useContext } from 'react'
import './MealItem.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/Cart-context'

const MealItem = (props) => {

    const cartCtx = useContext(CartContext)

    const price = `$${props.price.toFixed(2)}`

    const handleAddToCart = (amount) => {
      cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price
      })
    }

  return (
    <>
        <li className="meal">
            <div>
                <h2>{ props.name }</h2>
                <div className="description">{ props.description }</div>
                <div className="price">{ price }</div>
            </div>
            <div>
              <MealItemForm id={ props.id } onAddToCart={handleAddToCart}/>
            </div>
        </li>
    </>
  )
}

export default MealItem;