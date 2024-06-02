import React from 'react'
import { forwardRef } from 'react'
import './InputControl.css'

const InputControl = forwardRef((props, ref) => {
  return ( 
    <>
      <div className="input">
        <label htmlFor={ props.input.id }>{ props.label }</label>
        <input ref={ref} {...props.input } />
      </div>
    </>
  )
})

export default InputControl;