import {useEffect, useState} from "react";

const Info = ()=>{
    const [name,setName] = useState('');
    const [nickname,setNickname] = useState('')

    // componentDidMount, componentDidUpdate 함수를 합쳐 놓은 것
    // componentDidMount - 처음 컴포넌트가 생성되고 브라우즈에 나타날때 실행
    // componentDidUpdate - props, state, 부모컴포넌트 값이 갱신되었을때 실행
    useEffect(() => {
        console.log("마운트, 랜더링이 완료 되었습니다.")
        console.log(name)
        return ()=>{
            console.log('지우기...');
            console.log(name)
        }
    },[name]);

    const onChangeName = e=>{
        setName(e.target.value);
    };

    const onChangeNickname = e =>{
        setNickname(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <br/>
                <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                <div>
                    <b>이름: </b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    )

}

export default Info;