import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
  auth,
  googleProvider,
  createUserProfileDocument,

} from '../../firebase/firebase.util';

import { signInSuccess, signInFailure } from './user.actions';
import { UserActionTypes } from './user.types';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}
export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
      yield put(signInFailure(error));
  }
}

export function* signInWithEmail({payload:{email, password}}){
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email,password);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInWithEmail)
}

export function* userSagas(){
    yield all([call(onEmailSignInStart), call(onGoogleSignInStart)])
}