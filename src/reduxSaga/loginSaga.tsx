import { put, takeLatest } from 'redux-saga/effects';
import {UPDATE_FORM_FIELD,LOGIN_REQUEST} from './constants';
import { useNavigate } from 'react-router-dom';

import { loginSuccess,loginFailure} from './loginAction'
function* loginSaga(action:any) : Generator {
  // const navigate = useNavigate(); Access the navigate function using useNavigate hook

  try {
    console.log('loginSaga:', action.email, action.password);
    const { email, password , rememberMe } = action;
    // Make the API call to login with the provided email and password
    const response:any = yield fetch('http://localhost:5182/api/account/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ UserName: email, password , rememberMe:rememberMe }),
    });

    if (response.ok) {
      const { role, redirectUrl }:any = yield response.json();
      console.log('loginSaga - API response (success):', role, redirectUrl);
      yield put(loginSuccess(role, redirectUrl));
      // navigate(redirectUrl);

    } else {
      const errorMessage = yield response.text();
      console.log('loginSaga - API response (failure):', errorMessage);
      yield put(loginFailure(errorMessage));
    }
  } catch (error) {
    console.log('loginSaga - error:', error);
    yield put(loginFailure('An error occurred. Please try again later.'));
  }
}

function* formSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}

export default formSaga;