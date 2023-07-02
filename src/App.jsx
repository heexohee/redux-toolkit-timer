import { useSelector } from "react-redux";
import "./App.css";

function App() {
  // 여기에서 store에 접근하여, counter의 값을 읽어오고 싶다.
  // useSelector라는 훅으로
  const data = useSelector((state) => {
    return state;
  });

  console.log('data', data.counter);
  return <div> REDUX!</div>;
}

export default App;
