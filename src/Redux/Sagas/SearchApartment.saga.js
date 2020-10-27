import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  SEARCH_APARTMENTS,
  SEARCH_APARTMENTS_SUCCESS,
  SEARCH_APARTMENTS_FAILL
} from '../Constants'
function* searchApartmentsaga(action) {
  const apiUrl = 'http://localhost:3001';
  try {
    const { values} = action.payload;
    const response = yield axios.get(`${apiUrl}/productListData?q=${values}`);
    const data = response.data;
    console.log("TCL: function*searchApartmentsaga -> data", data)
   
   
    yield put({
      type: SEARCH_APARTMENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: SEARCH_APARTMENTS_FAILL,
      payload: error,
    });
  }
}
export default function* productSaga() {
  yield takeEvery(SEARCH_APARTMENTS, searchApartmentsaga);
  
}