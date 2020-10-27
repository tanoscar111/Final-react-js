import { combineReducers } from 'redux';
// combine reducer

//reducer 2
import productreducer from './Productlist.reducer';
import registerreducer from './Register.reducer';
import detailproductlist from './DetailProductList.reducer'
import bookingRoom from './BookingRoom.reducer';
import serchApartments from './SearchApartment.reducer'
export default combineReducers({
  registerreducer: registerreducer,
   productreducer: productreducer,
   detailproductlist:detailproductlist,
   bookingRoom:bookingRoom,
   serchApartments:serchApartments,
})
