import { takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_TRANSACTIONS } from './constants';
import { setTransactions } from './transactionActions';
import { getTransactioUrl, alovaInstance } from '../APIs/api';
import axios from 'axios';

function* fetchTransactionsSaga():Generator {
  try {
    const response:any = yield call(axios.get, getTransactioUrl);
    console.log('Saga - fetchTransactionsSaga - transactions:', response); // Check the transactions data  
    if (response && response.data) {
      yield put(setTransactions(response.data));
      console.log('Saga - fetchTransactionsSaga - SET_TRANSACTIONS dispatched'); // Check if SET_TRANSACTIONS is dispatched
    } else {
      console.error('Saga - fetchTransactionsSaga - Invalid response:', response);
      // Handle the case when the response or its data is missing or invalid
    }
  } catch (error) {
    console.error('Saga - fetchTransactionsSaga - Error:', error);
    // Handle the error case appropriately
  }
}

export function* transactionsSaga() {
  yield takeEvery(FETCH_TRANSACTIONS, fetchTransactionsSaga);
}