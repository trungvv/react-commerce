import ShopActionTypes from './shop.types'
import {call, put, takeLatest} from 'redux-saga/effects'
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.util'
import {fetchCollectionsSuccess, fetchCollectionsFailure} from './shop.actions'

export function* fetchCollections() {
    try {
        const collectionsRef = firestore.collection('collections');
        const snapshot = yield collectionsRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error));
    }
}

export function* onFetchCollectionsStart(){
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollections);
}