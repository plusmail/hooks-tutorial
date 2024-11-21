
import './App.css';
import Info from "./Info";
import {useState} from "react";
import Counter from "./Counter";
import InfoReducer from "./InfoReducer";
import Posts from "./Posts";

function App() {
    const [visible, setVisible] = useState(false);

  return (
    <div className="App">
        {/*<button onClick={()=>{*/}
        {/*    setVisible(!visible);*/}
        {/*}}*/}
        {/*>*/}
        {/*{visible ? "숨기기" : "보이기" }*/}
        {/*</button>*/}
        {/*<hr/>*/}
        {/*{visible && <Info/>}*/}
        {/*<Counter/>*/}
        {/*<hr/>*/}
        {/*<InfoReducer/>*/}
        <Posts/>
    </div>
  );
}

export default App;
