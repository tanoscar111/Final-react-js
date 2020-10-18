import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_DETAIL_PRODUCT_LIST,
  GET_DETAIL_PRODUCT_LIST_SUCCESS,
  GET_DETAIL_PRODUCT_LIST_FAIL
} from '../Constants'
function* getDetailProductListSaga(action) {
  const apiUrl = 'http://localhost:3001';
  try {
    const {id}=action.payload
    const response = yield axios.get(`${apiUrl}/productListData/${id}`);
    const data = response.data;
    console.log("TCL: function*getDetailProductListSaga -> data", data)
 

    yield put({
      type: GET_DETAIL_PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type:  GET_DETAIL_PRODUCT_LIST_FAIL,
      payload: error,
    });
  }
}

export default function* detailProductSaga() {
  yield takeEvery(GET_DETAIL_PRODUCT_LIST, getDetailProductListSaga);
}