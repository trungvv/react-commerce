import React from 'react';
import {createStructuredSelector} from 'reselect'
import './checkout.style.scss';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
function CheckOutPage({cartItems, cartTotal}) {
  return <div className='checkout-page'>
      <div className="checkout-header">
          <div className="header-block"><span>Product</span></div>
          <div className="header-block"><span>Description</span></div>
          <div className="header-block"><span>Quantity</span></div>
          <div className="header-block"><span>Price</span></div>
          <div className="header-block"><span>Remove</span></div>
      </div>
      {
          cartItems.map((cartItem, index)=><CheckoutItem key={index} cartItem={cartItem} />)
      }
      <div className='total'>TOTAL: ${cartTotal}</div>
  </div>;
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage)
