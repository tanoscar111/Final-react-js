import {
  
  GET_DETAIL_PRODUCT_LIST_SUCCESS,
  GET_DETAIL_PRODUCT_LIST_FAIL,
  CREATE_COMMENT_DETAIL_PRODUCT_LIST_SUCCESS,
  GET_COMMENT_DETAIL_PRODUCT_LIST_SUCCESS,
  EDIT_DETAIL_PRODUCT_LIST,
  EDIT_DETAIL_PRODUCT_LIST_SUCCESS,

} from '../Constants'
const initialState = {
  detailProductListData: {
    images: [],
  },
  commentList: [],
  detailProductList:[]
};

function detailProductListReducer(state = initialState, action) {

  switch (action.type) {
    case GET_DETAIL_PRODUCT_LIST_SUCCESS: { //action gửi cái max qua để check
      return {
        ...state,
        detailProductListData: {
          ...action.payload,
        },
      }
    }
    case CREATE_COMMENT_DETAIL_PRODUCT_LIST_SUCCESS: { //action gửi cái max qua để check
      return {
        ...state,
        commentList: [
          action.payload,
          ...state.commentList, //là cái data
        ],
      }
    }
    case GET_COMMENT_DETAIL_PRODUCT_LIST_SUCCESS: { //action gửi cái max qua để check
      return {
        ...state,
        commentList: [
          ...action.payload,
        ],
      }
    }
    // case EDIT_DETAIL_PRODUCT_LIST: {
    //  const {data}=action.payload
     
    //    return {
        
    //    detailProductList: {
    //      ...state,
    //         data
    //      },
    //    }
    //  }
    case GET_DETAIL_PRODUCT_LIST_FAIL: {
      return state;
    }
    default: {
      return state;
    }
  }
}

export default detailProductListReducer;