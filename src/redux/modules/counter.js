// src/modules/counter.js

// 초기 상태값
const initialState = {
    number: 0,
  };
  
  // 리듀서 : 리듀서란, state의 변화를 일으키는 함수
  // state를 action의 타입에 따라 변경하는 작업을 해주는 함수다. 
  
  // input : state와 action
  const counter = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  // 모듈파일에서는 리듀서를 export default 한다.
  export default counter;

  // 리덕스는 action —> dispatch —> reducer 순으로 동작