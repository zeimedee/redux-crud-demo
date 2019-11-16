import {ADD_POST, DATA_LOADED} from './constants';
import axios from 'axios';

const url = 'http://localhost:4000/blog';


export function addPost(payload){
    return dispatch =>{
        return axios.post(`${url}/post`, payload)
                    .then( res => dispatch(
                        {type:ADD_POST, payload}
                    ))
                    .catch(err => console.log(err));
    }
    
}

export function getData(payload){
    return dispatch => {
        return axios.get(url)
                    .then(res => dispatch(
                      {type:DATA_LOADED, payload:res.data}
                       ))
                    .catch(err => console.log(err));
            
}
}