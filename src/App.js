import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import {increaseCounter, decreaseCounter, log} from './actions';

function App() {

  const count = useSelector(state => state.myCount)
  const login = useSelector(state => state.logged)
   const dispatch = useDispatch()

  return (
    <div className="App">
    <h2>{count}</h2>
    <button onClick={()=>dispatch(increaseCounter())}>+</button>
    <button onClick={()=>dispatch(decreaseCounter())}>-</button>
    <button onClick={()=>dispatch(log())}>Login(out)</button>

    {login && <h2>Hey! you are logged in!</h2>}
    </div>
  );
}

export default App;
