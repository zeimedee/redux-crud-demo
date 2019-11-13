import React,{ useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getData} from './reducers/actions'

import './App.css';

function App() {
  const posts = useSelector(state => state.post);
  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(getData());
  },[dispatch]);


  return (
    <div className="">
     <ul>{posts.map((el,index)=>(<li key={index}>{el.title}</li>))}</ul>
    </div>
  );
}

export default App;
