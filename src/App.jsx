import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  // 여기에서 store에 접근하여, counter의 값을 읽어오고 싶다.
  // useSelector라는 훅으로
  const counter = useSelector((state) => {
    return state.counter;
  });


  // dispatch를 가져와보자!(여기서도 redux만의 훅을 써야함.)
  const dispatch = useDispatch();
  
  
  console.log('counter->', counter.number);
  return (<>
  <div> 
    현재 카운트 : {counter.number}
  </div>

  <button onClick={()=>{
    // 여기에 +1을 해주는 로직을 작성!
    // store에 있는 reducer가 정해놓은 방식을 써야함! 
  dispatch({
    type : "PLUS_ONE",
  });
  }}>+</button>

<button onClick={()=>{
    // 여기에 -1을 해주는 로직을 작성!
    // store에 있는 reducer가 정해놓은 방식을 써야함! 
  dispatch({
    type : "MINUS_ONE",
  });
  }}>-</button>


  </>
)}

export default App;
