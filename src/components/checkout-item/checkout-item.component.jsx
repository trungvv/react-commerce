import React from 'react';
import { connect } from 'react-redux';
import {
  clearItemFromCart,
  removeItemFromCart,
  addItem,
} from '../../redux/cart/cart.actions';
import './checkout-item.style.scss';
function CheckoutItem({ cartItem, clearItem, removeItem, addItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <span className="arrow" onClick={()=> removeItem(cartItem)}>&#8249;</span>
        <span className="value">{quantity}</span>

        <span className="arrow" onClick={()=>addItem(cartItem)}>&#8250;</span>
      </div>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  removeItem: (item) => dispatch(removeItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
