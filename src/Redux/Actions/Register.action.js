import {
  GET_USER,
  CREATE_USER,
  CHECK_USER
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

