import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectShopCollections} from '../../redux/shop/shop.selectors'
import './collection-overview.style.scss'

function CollectionOverview({collections}) {
  
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherItemProps }) => (
        <CollectionPreview key={id} {...otherItemProps} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
})

export default connect(mapStateToProps)(CollectionOverview)
