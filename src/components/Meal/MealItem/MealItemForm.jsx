import React, { useRef, useState } from 'react'
import './MealItemForm.css'
import InputControl from '../../MainUI/InputControl';

const MealItemForm = (props) => {

    const [checkAmountIsValid, setCheckAmountIsValid] = useState(true);

    const amountInputRef = useRef();

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 10){
            setCheckAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber)
        amountInputRef.current.value = "0";

    }

  return (
    <>
        <form className="form" onSubmit={handleSubmitForm}>
            <InputControl
            ref={amountInputRef}
            label="Amount"
            input= {{
                id:"amount_" + props.id,
                type:"number",
                min: 1,
                max : 10,
                step : 1,
                defaultValue:"0"}}
            />
            <button>Add To Cart</button>
            {
                !checkAmountIsValid && <p>Please enter a valid amount (1-10.)</p>
            }
        </form>
    </>
  )
}

export default MealItemForm;