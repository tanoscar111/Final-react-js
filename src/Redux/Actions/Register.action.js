import {
  GET_USER,
  CREATE_USER,
  CHECK_USER,
  LOGIN_ADMIN,
  LOGOUT_USER,
  
  
} from '../Constants';

export function getListUser(params) {
  return {
    type: GET_USER,
    payload: params,
  }
}

export function createUser(params) {
  return {
    type: CREATE_USER,
    payload: params,
  }
}
export function checkuser(params) {
  return {
    type: CHECK_USER,
    payload: params,
  }
}

export function loginAdmin(param){
  return{
    type:LOGIN_ADMIN,
    payload:param
    }
}
export function logoutUser(param){
  return {
    tpe:LOGOUT_USER,
    payload:param
  }
}
