import {GET_PRODUCT_LIST_SUCCESS,GET_PRODUCT_LIST_FAIL} from '../Constants'
const initialState = {
  productListData: [],

};

function productReducer(state = initialState, action) {
  console.log("TCL: myReducer -> action", state)
  switch (action.type) {
    case GET_PRODUCT_LIST_SUCCESS: { //action gửi cái max qua để check
      return {
        ...state,
        productListData: [
          ...action.payload,
        ],
      }
    } 
    case GET_PRODUCT_LIST_FAIL: {
      return state;
    }
    default: {
      return state;
    }
  }
}

export default productReducer;