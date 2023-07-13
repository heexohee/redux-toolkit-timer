
// import { createStoreHook } from "react-redux";
// action creator를 쓰기 때문에 이제 export를 해줄 필요가 없다!

// action value들
// const PLUS_ONE = "counter/PLUS_ONE";
// const MINUS_ONE = "counter/MINUS_ONE";
// const PLUS_N = "counter/PLUS_N";
// const MINUS_N = "counter/MINUS_N";


// action creator : action value를 return하는 함수.
// action 객체는 어디서 쓰나? : dispatch가 action 객체를 던진다고 했음.
// 컴포넌트에서 쓰임! 컴포넌트에서 쓰기 위해서 export 해주자!

// export const plusOne = () => {
    
//   return {
//     type: PLUS_ONE,
   
//   };
// };
// export const minusOne = () => {
//   return {
//     type: MINUS_ONE,
    
//     // action 객체는 type과 payload라는 두가지의 값으로 이루어진 객체이다.
//     // payload의 역할에 대해서 알아부자~
//   };
// };

//   export const plusN = (payload) => {
//     //console.log('payload-> ', payload);
//     return {
//       type: PLUS_N,
//       payload: payload
//     };
//   };
//   export const minusN = (payload) => {
//     //console.log('payload-> ', payload);
//     return {
//       type: MINUS_N,
//       payload: payload
//     };
//   };


// src/modules/counter.js

// 초기 상태값
// const initialState = {
//   number: 0,
// };

// 리듀서 : 리듀서란, state의 변화를 일으키는 함수
// state를 action의 타입에 따라 변경하는 작업을 해주는 함수다.

// input : state와 action
// action 객체라는 것은 action type을 payload 만큼 처리하는 것이다!
// ex : payload가 3이다. 3만큼을 plus

//action 객체 안으로 payload를 넣어줄 것인데~

// const counter = (state = initialState, action) => {
//   //console.log(state);
//   switch (action.type) {
  

//     case PLUS_N:
//       return {
//         number: state.number + action.payload
//       };


//     case MINUS_N:
//         return {
//           number: state.number - action.payload
//         };

//     default:
//       return state;
//   }
// };
// --- 기존 리덕스 사용법 ---

// --- createSlice ---
import { createSlice } from "@reduxjs/toolkit";

// 초기 상태값은 그대로!
const initialState = {
  number: 0,
};

//  Action Value, Action Creator, Reducer가 하나로 합쳐졌다는 점
// createSlice는 reducer도 만들고 action creator도 동시에 만들어 낸다.
// 카운터 슬라이스 안에는 action creator와 reducer가 둘 다 들어있다.
// name, initialState, reducers 이렇게 세가지를 인자로 가진 간단한 API
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // 리듀서 안에서 만든 함수 자체가 리듀서의 로직이자, 동시에 액션 크리에이터가 된다.
    addNumber: (state, action) => {
      state.number = state.number + 1;
    },

    minusNumber: (state, action) => {
      state.number = state.number - 1;
    },
  },
});
// 그래서 counterSlice.reducer;를 export해주면 reducer를 바깥으로 내보낼 수 있다.
// 여기 있는 actions은 addNumber, minusNumber를 가지고 있는 객체를 의미.

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addNumber, minusNumber } = counterSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default counterSlice.reducer;


//액션들도 아래처럼 익스포트 해줌!(아직 안만들어서 주석해둠)
//export counterSlice.actions




// 리덕스는 action —> dispatch —> reducer 순으로 동작
