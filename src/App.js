// import logo from "./logo.svg";
// import { useDispatch, useSelector } from "react-redux";
// import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";

import "./App.css";
import MyComponent from "./components/MyComponent";

const App = () => {
    // const count = useSelector((state) => state.counter.count);
    // const dispatch = useDispatch();

    return (
        <div>
            Hello world! &amp; Welcome!!!
            <MyComponent />
        </div>
        // <div className="App">
        //     <header className="App-header">
        //         <img src={logo} className="App-logo" alt="logo" />
        //         <p>Hello World Tsuyoix4</p>
        //         <div>Count = {count}</div>
        //         <button onClick={() => dispatch(increaseCounter())}>
        //             Increase
        //         </button>
        //         <button onClick={() => dispatch(decreaseCounter())}>
        //             Decrease
        //         </button>
        //     </header>
        // </div>
    );
};

export default App;
