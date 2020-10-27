import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_USER,
  CREATE_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  CHECK_USER,
  CHECK_USER_SUCCESS,
  CHECK_USER_FAIL,
  LOGIN_ADMIN,
  LOGIN_ADMIN_SUCCESS,
  LOGIN_ADMIN_FAIL,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL
} from '../Constants'
import history from '../../history'

function* getUserListSaga(action) {
  const apiUrl = 'http://localhost:3001';
  try {
    // const { page, limit } = action.payload;
    const response = yield axios.get(`${apiUrl}/usertListData`);
    const data = response.data;
   
   
    yield put({
      type: GET_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: GET_USER_FAIL,
      payload: error,
    });
  }
}
function* createUserSaga(action) {


  const apiUrl = 'http://localhost:3001';
  try {
    const response = yield axios.post(`${apiUrl}/usertListData`, action.payload);
    const data = response.data;
   

    yield put({
      type: CREATE_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: CREATE_USER_FAIL,
      payload: error,
    });
  }
}
function* loginAdminSaga(action) {

  const apiUrl = 'http://localhost:3001';
  try {
    const { userName, passWord } = action.payload;
    const response = yield axios.get(`${apiUrl}/usertListData?userName=${userName}&passWord=${passWord}&role=admin`, action.payload);
    const data = response.data;
 
    if(data[0].id){
    
    yield put({
      type:   LOGIN_ADMIN_SUCCESS,
      payload: data[0],
    });
    yield  localStorage.setItem('myValueInLocalStorage', JSON.stringify(data[0]));
    // yield Notification.open({
    //   message:`Xin chào !!${username}`,

    // })
    yield history.push('/admin/apartments') 
  }
  } catch (error) {
    yield put({
      type:   LOGIN_ADMIN_FAIL,
      payload: error,
    });
    // yield notification.open({
    //   message:`Username và mật khẩu không trùng khớp`,

    // });
  }
}
function* checkUserSaga(action) {

  

  const apiUrl = 'http://localhost:3001';
  try {
    const { userName, passWord } = action.payload;
    const response = yield axios.get(`${apiUrl}/usertListData?userName=${userName}&passWord=${passWord}&role=user`, action.payload);
    const data = response.data;
    
    if(data[0].id){
    
    yield put({
      type: CHECK_USER_SUCCESS,
      payload: data[0],
    });
    yield  localStorage.setItem('myValueInLocalStorage', JSON.stringify(data[0]));
    // yield Notification.open({
    //   message:`Xin chào !!${username}`,

    // })
    yield history.push('/') 
  }
  } catch (error) {
    yield put({
      type: CHECK_USER_FAIL,
      payload: error,
    });
    // yield notification.open({
    //   message:`Username và mật khẩu không trùng khớp`,

    // });
  }
}
function* logoutUserSaga(action) {
 

  const apiUrl = 'http://localhost:3001';
  try {
    const {  } = action.payload;
    const response = yield axios.get(`${apiUrl}/usertListData?userName=$&role=user`, action.payload);
    const data = response.data;
    
    if(data[0].id){
    
    yield put({
      type: LOGOUT_USER_SUCCESS,
      payload: data[0],
    });
    yield   localStorage.removeItem("myValueInLocalStorage");
    // yield Notification.open({
    //   message:`Xin chào !!${username}`,

    // })
    yield history.push('/') 
  }
  } catch (error) {
    yield put({
      type: CHECK_USER_FAIL,
      payload: error,
    });
    // yield notification.open({
    //   message:`Username và mật khẩu không trùng khớp`,

    // });
  }
}
export default function* productSaga() {
  yield takeEvery(GET_USER, getUserListSaga);
  yield takeEvery(CREATE_USER, createUserSaga);
  yield takeEvery(CHECK_USER, checkUserSaga);
  yield takeEvery(LOGIN_ADMIN, loginAdminSaga);
  yield takeEvery(LOGOUT_USER, logoutUserSaga);
}