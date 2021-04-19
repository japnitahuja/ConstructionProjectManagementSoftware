import { all, call, put, takeLatest } from "redux-saga/effects";
import { inviteUserFailure, inviteUserSuccess, signInFailure, signInSuccessful, signUpFail, signUpSuccesful, taskOwnerAndTradePartnerSignUpSuccessful } from "./user.actions";
import { UserActionTypes } from "./user.types";

export function* signUp({ payload }) {
  console.log("Sign Up has started.");
  console.log(payload);

  try {
    let data = payload;
    console.log(JSON.stringify(data));
    let resp = yield fetch("http://127.0.0.1:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(resp);
    resp = yield resp.json();
    if (resp.done) {
      if (resp.user) {
        const user = yield resp.user;
        const token = yield resp.token;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        yield put(signUpSuccesful(user));
      } else {
        yield put(taskOwnerAndTradePartnerSignUpSuccessful(resp.message));
      }
    } else {
      yield put(signUpFail("Failed to sign up."));
    }
  } catch (error) {
    yield put(signUpFail(error));
  }
}

export function* signIn({payload}){
  try {
    let data = payload;
    let resp = yield fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    resp = yield resp.json()
    if(resp.done){
      if(resp.user){
        const user = yield resp.user;
        const token = yield resp.token;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        yield put(signInSuccessful(user));
      }else{
        yield put(signInFailure(resp.message))
      }
    }else{
      yield put(signInFailure(resp.error))
    }
  } catch (error) {
    console.log(error)
  }
}

export function* inviteUser({payload}){
  try {
    let data = payload;
    let resp = yield fetch("http://127.0.0.1:5000/inviteUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    resp = yield resp.json()
    if(resp.done){
      yield put(inviteUserSuccess(resp.message))
    }else{
      yield put(inviteUserFailure(resp.message))
    }
  } catch (error) {
    console.log(error)
    yield put(inviteUserFailure(error))
  }
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onSignInStart(){
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signIn)
}

export function* onInviteUserStart(){
  yield takeLatest(UserActionTypes.INVITE_USER_START, inviteUser)
}

export function* userSagas() {
  yield all([
    call(onSignUpStart),
    call(onSignInStart),
    call(onInviteUserStart)
  ]);
}
