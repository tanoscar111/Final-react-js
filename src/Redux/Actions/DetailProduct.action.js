import {GET_DETAIL_PRODUCT_LIST} from '../Constants'
export function getDetailProductList(param){
  return {
    type:GET_DETAIL_PRODUCT_LIST,
    payload:param
  }
}