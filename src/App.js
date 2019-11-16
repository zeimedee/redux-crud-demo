import React,{ useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getData} from './reducers/actions'
import Post from './post'

import './App.css';

function App() {
  const posts = useSelector(state => state.post);
  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(getData());
  },[dispatch]);


  return (
    <div className="">
    <div>
     <ul>{posts.map((el,index)=>(
       <li key={index}>{el.title}:{el.body}</li>)
       )}</ul>
    </div>

    <div>
      <Post />
    </div>

    </div>
    
  );
}

export default App;
