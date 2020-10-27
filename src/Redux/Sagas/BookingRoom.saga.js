import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {  notification } from 'antd';
import{CREATE_BOOKKING,
  CREATE_BOOKKING_SUCCESS,
  CREATE_BOOKKING_FAILL,
  GET_BOOKKING,
  GET_BOOKKING_SUCCESS,
  GET_BOOKKING_FAILL
} from '../Constants';
function* createBookingRoom(action){
  console.log("TCL: function*createBookingRoom -> action", action)
  const apiUrl = 'http://localhost:3001';
  try {
    const response = yield axios.post(`${apiUrl}/booking`, action.payload);
    const data = response.data;


    yield put({
      type: CREATE_BOOKKING_SUCCESS,
      payload: data,
    });
    yield 
    
    notification.open({
      message: 'Đặt phòng thành công',
      
        
    });
  } catch (error) {
    yield put({
      type: CREATE_BOOKKING_FAILL,
      payload: error,
    });
    yield 
    
      notification.open({
        message: 'Phòng đã được đặt',
        
          
      });
  }
}
function* getBookingRoom(action) {
  const apiUrl = 'http://localhost:3001';
  try {
    const { page, limit } = action.payload;
    const response = yield axios.get(`${apiUrl}/booking?_page=${page}&_limit=${limit}`);
    const data = response.data;



    yield put({
      type: GET_BOOKKING_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: GET_BOOKKING_FAILL,
      payload: error,
    });
  }
}
export default function* detailProductSaga() {
  yield takeEvery(CREATE_BOOKKING, createBookingRoom);
  yield takeEvery(GET_BOOKKING,getBookingRoom)
}