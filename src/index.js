import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/config/configStore";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //App을 Provider로 감싸주고, configStore에서 export default 한 store를 넣어줍니다.
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// index.js에서 우리가 store를 사용하기 위한 코드를 작성해볼 것.
// App이라는 컴포넌트가 프로바이더의 지배권 안으로 들어오는 것.
// 프로바이더라는 것은 우리가 만든 그 store를 기반으로 지배권을 행사하는 건데, 
// store로 만들어 놓은 그 중앙 데이터 관리소를 이제는 이 App 컴포넌트 하부에서(App 컴포넌트가 있는 곳 전체에서 store를 쓸 수 있다는 것. )
// 리덕스는 action —> dispatch —> reducer 순으로 동작
