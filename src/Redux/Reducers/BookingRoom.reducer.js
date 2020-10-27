import{CREATE_BOOKKING_SUCCESS,CREATE_BOOKKING_FAILL,
  GET_BOOKKING_SUCCESS,
  } from '../Constants';
const initialState = {
  booking:[]
};
function bookingRoom(state = initialState, action) {

  switch (action.type) {
   
    case CREATE_BOOKKING_SUCCESS: { //action gửi cái max qua để check
      return {
        ...state,
        booking: [
          action.payload,
          ...state.booking, //là cái data
        ],
      }
    }
    case GET_BOOKKING_SUCCESS: { //action gửi cái max qua để check
      return {
        ...state,
        booking: [
          ...action.payload,
        ],
      }
    }
 
  
    case CREATE_BOOKKING_FAILL: {
      return state;
    }
    default: {
      return state;
    }
  }
}

export default bookingRoom;