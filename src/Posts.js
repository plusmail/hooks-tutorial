import React, {useEffect, useReducer, useState} from "react";

function reducer(state,action){
    switch (action.type){
        case "SET_POSTS":
            return action.payload;
        case "DELETE_POST":
            return state.filter((post)=> post.id !== action.payload);
        default:
            return state;
    }
}

const Posts = ()=>{
    // const [posts, setPosts] = useState([])
    const [posts,dispatch] = useReducer(reducer, []);

    const handleDelete = (id) => {
        dispatch({type:"DELETE_POST", payload: id});
    }

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => dispatch({type:"SET_POSTS", payload:data}))
            .catch((error)=> console.error("에러발생",error))
    }, []);

    const styleUl= {
        listStyleType: "none",
        padding:"0",
    }
    const styleLi = {
        textAlign:"left",
        marginBottom:"20px",
        borderBottom: "1px solid #ddd",
        padding:"10px, 0"
    }

    return (
        <div>
            <h1>Post List</h1>
            <ul style={styleUl}>
                {posts.map((post)=>(
                    <li key={post.id} style={styleLi}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                        <button onClick={()=> handleDelete(post.id)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    )

}
export  default Posts;