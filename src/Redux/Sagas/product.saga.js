import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_PRODUCT_LIST,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_FAIL
} from '../Constants'

function* getProductListSaga(action) {
  const apiUrl = 'http://localhost:3001';
  try {
    const { page, limit } = action.payload;
    const response = yield axios.get(`${apiUrl}/productListData?_page=${page}&_limit=${limit}`);
    const data = response.data;
    console.log("TCL: function*getProductListSaga -> data", data)

    yield put({
      type: GET_PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: GET_PRODUCT_LIST_FAIL,
      payload: error,
    });
  }
}

export default function* productSaga() {
  yield takeEvery(GET_PRODUCT_LIST, getProductListSaga);
}