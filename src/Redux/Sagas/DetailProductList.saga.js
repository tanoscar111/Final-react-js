import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { Button, notification } from 'antd';
import {
  GET_DETAIL_PRODUCT_LIST,
  GET_DETAIL_PRODUCT_LIST_SUCCESS,
  GET_DETAIL_PRODUCT_LIST_FAIL,
  CREATE_COMMENT_DETAIL_PRODUCT_LIST,
  CREATE_COMMENT_DETAIL_PRODUCT_LIST_SUCCESS,
  CREATE_COMMENT_DETAIL_PRODUCT_LIST_FAIL,
  GET_COMMENT_DETAIL_PRODUCT_LIST,
  GET_COMMENT_DETAIL_PRODUCT_LIST_SUCCESS,
  GET_COMMENT_DETAIL_PRODUCT_LIST_FAIL,



  EDIT_DETAIL_PRODUCT_LIST,
  EDIT_DETAIL_PRODUCT_LIST_SUCCESS,
  EDIT_DETAIL_PRODUCT_LIST_FAIL,

} from '../Constants'
function* getDetailProductListSaga(action) {
  const apiUrl = 'http://localhost:3001';
  try {
    const { id } = action.payload
    const response = yield axios.get(`${apiUrl}/productListData/${id}`);
    const data = response.data;



    yield put({
      type: GET_DETAIL_PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: GET_DETAIL_PRODUCT_LIST_FAIL,
      payload: error,
    });
  }
}
function* createCommentSaga(action) {


  const apiUrl = 'http://localhost:3001';
  try {
    const response = yield axios.post(`${apiUrl}/comments`, action.payload);
    const data = response.data;


    yield put({
      type: CREATE_COMMENT_DETAIL_PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: CREATE_COMMENT_DETAIL_PRODUCT_LIST_FAIL,
      payload: error,
    });
  }
}
function* getCommentSaga(action) {

  const { id } = action.payload
  const apiUrl = 'http://localhost:3001';
  try {
    const response = yield axios.get(`${apiUrl}/comments?productId=${id}&_sort=id&_order=desc`, action.payload);
    const data = response.data;


    yield put({
      type: GET_COMMENT_DETAIL_PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: GET_COMMENT_DETAIL_PRODUCT_LIST_FAIL,
      payload: error,
    });
  }
}
function* editDetailSaga(action) {


  const apiUrl = 'http://localhost:3001';
  console.log("TCL: function*editDetailProductList -> action.payload", action.payload)

  try {
    const { id, tenphong, giaphong, giakhuyenmai, tiendien, tiennuoc, tienmang,
      tienvesinh, noidung } = action.payload;
    const response = yield axios.patch(`${apiUrl}/productListData/${id}`, {
      tenphong, giaphong, giakhuyenmai, tiendien,
      tiennuoc, tienmang, tienvesinh, noidung
    });
    const data = response.data;
    console.log("TCL: function*editDetailSaga -> data", data)


    yield put({
      type: EDIT_DETAIL_PRODUCT_LIST_SUCCESS,
      payload: data,

    });
    yield 
    
      notification.open({
        message: 'Cập nhật thành công',
        
          
      });
  
  } catch (error) {
    yield put({
      type: EDIT_DETAIL_PRODUCT_LIST_FAIL,
      payload: error,
    });
    yield 
    
      notification.open({
        message: 'Cập nhật thất bại',
        
          
      });
  }
}
export default function* detailProductSaga() {
  yield takeEvery(GET_DETAIL_PRODUCT_LIST, getDetailProductListSaga);
  yield takeEvery(CREATE_COMMENT_DETAIL_PRODUCT_LIST, createCommentSaga);
  yield takeEvery(GET_COMMENT_DETAIL_PRODUCT_LIST, getCommentSaga);
  yield takeEvery(EDIT_DETAIL_PRODUCT_LIST, editDetailSaga);
}