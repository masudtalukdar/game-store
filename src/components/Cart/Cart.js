import React from 'react';
import './Cart.css';
const Cart = (props) => {
  const { cart } = props;
  let total =
    cart.length > 0
      ? cart.reduce((sum, product) => sum + parseFloat(product.price), 0)
      : 0;

  console.log(cart);
  return (
    <div className='cart-count'>
      <h3>Game: {props.cart.length}</h3>
      <p>
        Total Cost: $ <span>{total}</span>
      </p>
      <h3>Game Name:</h3>
      <ul>
        {cart?.map((product) => {
          return (
            <div className='gameName'>
              <img src={product.thumbnail} alt='' />

              <p className='game-title' key={product.id}>
                {product.title}
              </p>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
