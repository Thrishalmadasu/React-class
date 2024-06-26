import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Cart() {
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();

    const increaseQuantity = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    const decreaseQuantity = (product) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: product });
    };

    const cartItems = Object.values(items);

    if (cartItems.length === 0) {
        return <div className="cart">Your cart is empty.</div>;
    }

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                    <span>{item.title}</span>
                    <button onClick={() => decreaseQuantity(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item)}>+</button>
                </div>
            ))}
        </div>
    );
}

export default Cart;