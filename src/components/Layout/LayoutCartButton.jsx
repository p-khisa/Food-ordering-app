import React, { useContext, useEffect, useState } from 'react'
// import classes from './LayoutCartButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../store/Cart-context';
import './LayoutCartButton.css'


const LayoutCartButton = (props) => {
  const [btnHighlighted, setBtnHighlighted] = useState(false)
  const cartCtx = useContext(CartContext)

  const {items} = cartCtx

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  // const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump: ""}`

  useEffect(() =>{
    if(items.length === 0){
      return
    }
    setBtnHighlighted(true)

    const timer = setTimeout(() =>{
      setBtnHighlighted(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <>
        <button className="button" onClick={props.onClick}>
            <span className="icon"><FontAwesomeIcon icon={faCartShopping}/></span>
            <span>Your cart</span>
            <span className="badge">{numberOfCartItems}</span>  
        </button>
    </>

  )
}

export default LayoutCartButton;
