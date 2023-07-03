import { useDispatch, useSelector } from "react-redux";
import "./App.css";
// import { PLUS_ONE, MINUS_ONE } from "./redux/modules/counter";
import { plusOne, minusOne } from "./redux/modules/counter";


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
    // plusOne 함수가 반환하는 값을 보면 해소가 됌. 
    // plusOne 함수가 반환하는 값 : type을 가지고 있는 action이 객체,
    // 즉 반환하는 값이 action 객체니까 plusOne함수를 괄호 열고 닫으면
    // 반환값이 나오기 때문에.
    // 그렇기 때문에 기존처럼 action value를 직접 이렇게 import해서 사용하는게 아니라, 
    // action creator를 이용해서 사용했다는 것.


  //dispatch({
  //   type: PLUS_ONE,
  // });

  dispatch(plusOne());
  }}> 😘 </button>

<button onClick={()=>{
    // 여기에 -1을 해주는 로직을 작성!
    // store에 있는 reducer가 정해놓은 방식을 써야함! 
  dispatch(minusOne());
  }}> 🥹 </button>


  </>
)}

export default App;
