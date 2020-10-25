import { GET_USER_SUCCESS, GET_USER_FAIL, CREATE_USER_SUCCESS, 
  } from '../Constants'
const initialState = {
  usertListData: [],

};

function registerReducer(state = initialState, action) {

  switch (action.type) {
    case GET_USER_SUCCESS: { //action gửi cái max qua để check
      return {
        ...state,
        usertListData: [

          ...action.payload, //là cái data
        ],
      }
    }
    case CREATE_USER_SUCCESS: { //action gửi cái max qua để check
      return {
        ...state,
        usertListData: [
          ...action.payload, //là cái data
          action.payload
        ],
      }
    }
    
    default: {
      return state;
    }

  }
}


export default registerReducer;