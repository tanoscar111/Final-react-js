import { combineReducers } from 'redux';
// combine reducer

//reducer 2
import productreducer from './Productlist.reducer';
import registerreducer from './Register.reducer'
export default combineReducers({
  registerreducer: registerreducer,
   productreducer: productreducer
})
