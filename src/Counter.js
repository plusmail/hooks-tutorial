import {useReducer} from "react";

function reducer(state, action) {

    console.log(state , action);
    switch (action.type) {
        case 'INCREMENT':
            return {value: state.value + 1};
        case 'DECREMENT':
            return {value: state.value - 1};
        default:
            return state;
    }
}
// userReducer(callback, 메개변수, 초기화)
const Counter = () => {
    // 중간제품
    // state = {value:0}
    const [state, dispatch] = useReducer(reducer, {value: 0});

    return (
        <div>
            <p>
                현재의 카운터 값은 <b>{state.value}</b>
            </p>
            <button onClick={ ()=>dispatch({type:'INCREMENT'})}>+1</button>
            <button onClick={ ()=>dispatch({type:'DECREMENT'})}>-1</button>
        </div>
    )

}


export default Counter;