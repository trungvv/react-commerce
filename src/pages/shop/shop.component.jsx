import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpiner from '../../components/with-spinner/with-spinner.component';
import {
  fetchCollectionsStartAsync,
} from '../../redux/shop/shop.actions';

import {
  selectIsCollectionsLoaded,
  selectIsCollectionFetching,
} from '../../redux/shop/shop.selectors';

// import { insertCollectionsToFirebase } from '../../firebase/firebase.util';

const CollectionOverviewWithSpinner = WithSpiner(CollectionOverview);
const CollectionPageWithSpinner = WithSpiner(CollectionPage);
class ShopPage extends React.Component {


  componentDidMount() {


    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }
  render() {
    const { match, isCollectionsLoaded, isFetching } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={isFetching} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:routeName`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionsLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  isCollectionsLoaded: selectIsCollectionsLoaded,
  isFetching: selectIsCollectionFetching,
});
const mapDispatchToProps = (dispatch) => ({

  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
