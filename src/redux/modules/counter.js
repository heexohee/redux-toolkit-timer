// action value 
    export const PLUS_ONE = "counter/PLUS_ONE";
    export const MINUS_ONE = "counter/MINUS_ONE";

// action creator : action value를 return하는 함수.
// action 객체는 어디서 쓰나? : dispatch가 action 객체를 던진다고 했음.
// 컴포넌트에서 쓰임! 컴포넌트에서 쓰기 위해서 export 해주자!
export const plusOne = ()=>{
    return {
        type: PLUS_ONE,
    }
}
export const minusOne = ()=>{
    return {
        type: MINUS_ONE,
    }
}



// src/modules/counter.js

// 초기 상태값
const initialState = {
    number: 0,
  };
  
  // 리듀서 : 리듀서란, state의 변화를 일으키는 함수
  // state를 action의 타입에 따라 변경하는 작업을 해주는 함수다. 
  
  // input : state와 action
  const counter = (state = initialState, action) => {
    //console.log(state);
    switch (action.type) {
        case  PLUS_ONE:
            return {
                number: state.number+1,
            }
            // 그러면 우리는 action 객체를 던져줄 때, 액션에 
            // 있는 타입을 "PLUS_ONE"으로 해서 던져주면 되겠다.

            case MINUS_ONE:
                return {
                    number: state.number-1,
                }

      default:
        return state;
    }
  };
  
  // 모듈파일에서는 리듀서를 export default 한다.
  export default counter;

  // 리덕스는 action —> dispatch —> reducer 순으로 동작