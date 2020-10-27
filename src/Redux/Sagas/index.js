import { fork } from 'redux-saga/effects';

import productSaga from './product.saga';
import registerSaga from './register.saga';
import detailProductList from './DetailProductList.saga.js'
import bookingroom from './BookingRoom.saga'
import searchapartment from './SearchApartment.saga'
export default function* mySaga() {
  yield fork(productSaga);
  yield fork(registerSaga);
  yield fork(detailProductList);
  yield fork (bookingroom)
  yield fork (searchapartment)
}
