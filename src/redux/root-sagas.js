import {} from 'redux-saga';
import { onFetchCollectionsStart } from './shop/shop.sagas';
import { all, call } from 'redux-saga/effects';
import { userSagas } from './user/user.sagas';

export default function* rootSaga() {
  yield all([call(onFetchCollectionsStart), call(userSagas)]);
}
