import {ADD_POST, DATA_LOADED} from './constants';
import axios from 'axios';

export function addPost(payload){
    return {type:ADD_POST, payload}
}

export function getData(payload){
    return dispatch => {
        return axios.get('http://localhost:4000/blog')
                    .then(res => dispatch(
                     {type:DATA_LOADED, payload:res.data}
                       ))
                    .catch(err => console.log(err));
            
}
}