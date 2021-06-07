import { createStore, combineReducers } from 'redux';
import phoneReducer from "./phone/ReducerPhone";
import tvReducer from './tv/ReducerTv';


const rootReducer = combineReducers({
  phone: phoneReducer,
  television: tvReducer,
})

const store = createStore(rootReducer);

export default store;