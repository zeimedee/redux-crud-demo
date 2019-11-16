import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getData} from './reducers/actions';


function Blog() {
    const posts = useSelector(state => state.post);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getData())
    },[dispatch])
    return (
        <div>
        <ul>{posts.map((el,index)=>(
       <li key={index}>{el.title}:{el.body}</li>)
       )}</ul>
            
        </div>
    )
}

export default Blog
