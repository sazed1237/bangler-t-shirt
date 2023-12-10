import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveToCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please add some Products</p>
    }
    else {
        message = <div>
            <h4>boroloxxx</h4>
            <p><small>Thanks for giving me your money</small></p>
        </div>
    }

    return (
        <div>
            <h3 className={cart.length === 1 ? 'blue' : 'red'}>Order summery: {cart.length}</h3>
            <p className={`bold bordered ${cart.length ===3 ? 'yellow' : 'pink'}`}>Something</p>
            {
                cart.length > 2
                    ? <span className='purple'>arow kino</span>
                    : <span>fokira</span>
            }
            {message}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name} <button
                    onClick={() => handleRemoveToCart(tshirt._id)}>
                        X</button></p>)
            }
            {
                cart.length === 2 && <p>Double Bonanza !!!!</p>
            }
            {
                cart.length === 3 || <h3>3ta to hoilo nah</h3>
            }
        </div>
    );
};

export default Cart;


/**
 * CONDITIONAL RENDERING
 * 1. use if or if else to set a variable that will contain an element, components
 * 2. ternary operator: condition ? 'for true' : 'false'
 * 3. Logical &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical || (if the condition is false then the next thing will be displayed)
 * 
*/

/**
 * CONDITIONAL CSS CLASS
 * 1. use ternary
 * ternary inside template string 
*/