import {
  
  SEARCH_APARTMENTS_SUCCESS,
  SEARCH_APARTMENTS_FAILL
} from '../Constants';
const initialState = {
  search: []
};
function SearchApartment(state = initialState, action) {

  switch (action.type) {

    case SEARCH_APARTMENTS_SUCCESS: { //action gửi cái max qua để check
          return{
            ...state,
            search:[ ...action.payload ]
          }
    }



    case SEARCH_APARTMENTS_FAILL: {
      return state;
    }
    default: {
      return state;
    }
  }
}

export default SearchApartment;