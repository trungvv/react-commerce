import {} from 'redux-saga';
import { onFetchCollectionsStart } from './shop/shop.sagas';
import { all,call} from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([call(onFetchCollectionsStart)]);
}
