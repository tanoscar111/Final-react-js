import {GET_PRODUCT_LIST_SUCCESS,GET_PRODUCT_LIST_FAIL} from '../Constants'
const initialState = {
  productListData: [],

};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_LIST_SUCCESS: { //action gửi cái max qua để check
      const { data, more } = action.payload;
      if (more) {
        return {
          ...state,
          productListData: [
            ...state.productListData,
            ...data,
          ],
        }
      }
      return {
        ...state,
        productListData: [
          ...data,
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