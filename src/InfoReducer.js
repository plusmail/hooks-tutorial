import {useReducer} from "react";

function reducer(state,action){

    console.log(action.name);
    // switch 사용 않하고 많은 state변수를 다룰 수 있다.
    return {
        ...state,
        [action.name] : action.value
    }
}

const InfoReducer = ()=>{
    // dispatch는 reducer 함수를 호출 하는 함수이고 dispatch({type:'INCREMENT'}) 이렇게 실행
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: '',
    })
    const {name,nickname} = state;

    const onChange = e=> {
        dispatch(e.target)
    }

    return (
        <div>
            <div>
                <input name={"name"} value={name} onChange={onChange}/>
                <input name={"nickname"} value={nickname} onChange={onChange}/>
            </div>
            <div>
                <div>
                    <b>이름 : </b> {name}
                </div>
                <div>
                    <b>닉네임 :</b> {nickname}
                </div>
            </div>
        </div>
    )

}
export default InfoReducer;