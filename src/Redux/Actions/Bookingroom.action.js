import {
  CREATE_BOOKKING,
  GET_BOOKKING
} from '../Constants'
export function createBookingRoom(param){
  return {
    type:CREATE_BOOKKING,
    payload:param
  }

}
export function getBookingRoom(param){
  return{
    type:GET_BOOKKING,
    payload:param,
  }
}