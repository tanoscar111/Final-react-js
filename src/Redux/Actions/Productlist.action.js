import {GET_PRODUCT_LIST} from '../Constants'
export function getProductList(params) {
  return {
    type: GET_PRODUCT_LIST,
    payload: params,
  }
}