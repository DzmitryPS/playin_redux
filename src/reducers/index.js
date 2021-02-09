import counter from './counter';
import isLogged from './isLogged';
import { combineReducers } from 'redux';

 const AllRedurers = combineReducers({
    myCount: counter,
    logged: isLogged
})

export default AllRedurers