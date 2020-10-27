import {
  SEARCH_APARTMENTS,
  
} from '../Constants'
export function searchapartments(param){
  return {
    type:SEARCH_APARTMENTS,
    payload:param
  }

}