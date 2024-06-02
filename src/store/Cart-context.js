import React from 'react'
import { createContext } from 'react'


const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    clearall: () => {}

});

export default CartContext;