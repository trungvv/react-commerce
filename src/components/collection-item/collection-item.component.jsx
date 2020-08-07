import React from 'react';
import './collection-item.style.scss';
import CustomBotton from '../custom-botton/custom-botton.component';
import {addItem} from '../../redux/cart/cart.actions'
import { connect } from 'react-redux';
function CollectionItem({ item, addItem }) {
  const { name, price, imageUrl} = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomBotton onClick={()=> addItem(item)} inverted>Add to cart</CustomBotton>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
