import { useDispatch, useSelector } from "react-redux";
import "./App.css";
// import { PLUS_ONE, MINUS_ONE } from "./redux/modules/counter";
import { plusOne, minusOne } from "./redux/modules/counter";
import { useEffect, useState } from "react";
import { plusN, minusN } from "./redux/modules/counter";


function App() {
const [number, setNumber] = useState(0);


  // 여기에서 store에 접근하여, counter의 값을 읽어오고 싶다.
  // useSelector라는 훅으로
  const counter = useSelector((state) => {
    return state.counter;
  });

  // useEffect는 화면이 다시 랜더링될 때, 출력되는 작동을하는 hook입니다.
  // 그래서 의존성 배열에 number를 주게 되면, number라는 state가 바뀔 때마다
  // 내부의 로직이 수행됨. 
  
  // 잘 동작한다는 것을 아래의 코드 3줄로 확인했음.
  // useEffect(()=>{
  //   console.log('number ->',+number)
  // }, [number])


  // dispatch를 가져와보자!(여기서도 redux만의 훅을 써야함.)
  const dispatch = useDispatch();
  
  
  //console.log('counter->', counter.number);
  return (<>
  <div> 현재 카운트 : {counter.number} </div>
  <div> 
    <input type="number" 
    value={number} 
    onChange={(event)=>{
    setNumber(+event.target.value)
  }} />
  
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

  // dispatch(plusOne());

  // dispatch({
  //   type : "counter/PLUS_N",
  //   payload:3,
  // });
  // 아래 코드 해체한 것이 위의 4줄의 코드
  dispatch(plusN(number));
  }}> + </button>

<button onClick={()=>{
    // 여기에 -1을 해주는 로직을 작성!
    // store에 있는 reducer가 정해놓은 방식을 써야함! 
  dispatch(minusN(number));
  }}> - </button>


  </>
)}

export default App;

// key값 난수로
// date 객체로 id 값
// Math.random() 값 
// uuid


// 리액트에서 엘리먼트에 키를 넣는 이유
// 아까 고유값 키-> 식별하기 위했던 것(투두)
// 둘이 다르다!!!!
// 리액트에서 엘림너트에 key를 키를 사용하는 이유
// 키 벨류 페어말할때 키가 아님.

