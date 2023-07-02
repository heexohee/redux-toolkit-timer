// 중앙 데이터 관리소(store)를 설정하는 부분.
import {createStore} from 'redux';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({});
const store = createStore(rootReducer);

export default store;
// 함수가 실행이 되면 그 return값을 변수에 넣는 것.
// 함수의 인자들은 reducer의 묶음들이 들어가야함.
// 즉, rootreducer가 createStore의 인자로 들어간다.

// modules 안에 넣어 놓은 state의 묶음들을 객체 형태에다가 다 
// 몰아넣을 것.
// 그렇게 되면 이 애플리케이션, 웹 애플리케이션 내에서 관리하는 state 집단들이 
// 다 rootreducer로 들어오게 되고,
// 모든 컴포넌트들은 props로 값을 내려주지 않더라도, 
// 바로 이 중앙 데이터 관리소로 데이터를 바라볼 수 있게 된다.
// 그렇게 만든 우리의 store을 애플리케이션에 주입해주는 과정이 필요한데
// 이렇게 store를 만들었는데, store를 사용하기 위해해서 애플리케이션 내부로 넣어야 되니까
// 만든 것을 밖으로 내보내야함. 