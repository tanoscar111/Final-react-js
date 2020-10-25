import {GET_DETAIL_PRODUCT_LIST,
  CREATE_COMMENT_DETAIL_PRODUCT_LIST,
  GET_COMMENT_DETAIL_PRODUCT_LIST,
  EDIT_DETAIL_PRODUCT_LIST
} from '../Constants'
export function getDetailProductList(param){
  return {
    type:GET_DETAIL_PRODUCT_LIST,
    payload:param
  }
}

export function createCommentDetailProductlist(param){
  return {
    type:CREATE_COMMENT_DETAIL_PRODUCT_LIST,
    payload:param
  }
}
export function getCommentDetailProduct(param){
  return{
    type:GET_COMMENT_DETAIL_PRODUCT_LIST,
    payload:param
  }
}
export function editDetailProductList(param){

  return {
    type:EDIT_DETAIL_PRODUCT_LIST,
    payload:param
  }
}
