import { takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_TRANSACTIONS } from './constants';
import { setTransactions } from './transactionActions';
import axios from 'axios';
import {getTransactioUrl} from '../APIs/api'

function* fetchTransactionsSaga(): Generator {
  try {
    const response:any = yield call(axios.get, getTransactioUrl);
    const transactions = response.data;  
    console.log('Saga - fetchTransactionsSaga - transactions:', transactions); // Check the transactions data  
    yield put(setTransactions(transactions));
    console.log('Saga - fetchTransactionsSaga - SET_TRANSACTIONS dispatched'); // Check if SET_TRANSACTIONS is dispatched
    
      } catch (error) {
    console.error(error);
  }
}

export function* transactionsSaga() {
  yield takeEvery(FETCH_TRANSACTIONS, fetchTransactionsSaga);
}