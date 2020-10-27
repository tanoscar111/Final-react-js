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
    const { page, limit, type, more } = action.payload;
    const response = yield axios({
      method: 'GET',
      url: `${apiUrl}/productListData`,
      params: {
        _page: page,
        _limit: limit,
        ...type && { type }
      }
    });
    const data = response.data;

    yield put({
      type: GET_PRODUCT_LIST_SUCCESS,
      payload: {
        data,
        more,
      },
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