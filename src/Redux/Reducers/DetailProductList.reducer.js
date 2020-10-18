import { GET_DETAIL_PRODUCT_LIST,
  GET_DETAIL_PRODUCT_LIST_SUCCESS,
  GET_DETAIL_PRODUCT_LIST_FAIL} from '../Constants'
const initialState = {
  detailProductListData: {
    images: [],
  },

};

function detailProductListReducer(state = initialState, action) {
  console.log("TCL: myReducer -> action", state)
  switch (action.type) {
    case GET_DETAIL_PRODUCT_LIST_SUCCESS: { //action gửi cái max qua để check
      return {
        ...state,
        detailProductListData: {
          ...action.payload,
        },
      }
    } 
    case GET_DETAIL_PRODUCT_LIST_FAIL: {
      return state;
    }
    default: {
      return state;
    }
  }
}

export default detailProductListReducer;