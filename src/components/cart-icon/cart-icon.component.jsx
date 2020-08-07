import React from 'react';
import {createStructuredSelector} from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import './cart-icon.style.scss';
import { connect } from 'react-redux';
import { selectCartItemCount } from '../../redux/cart/cart.selectors';

function CartIcon({ itemCount, toggleCartHidden }) {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
