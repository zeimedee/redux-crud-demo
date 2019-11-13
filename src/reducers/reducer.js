import {ADD_POST, DATA_LOADED} from './constants'

const initialState = {
    post: []
}

const rootReducer = (state = initialState, action) => {
    if(action.type === ADD_POST){
        return Object.assign({},state,{
            post: state.post.concat(action.payload)
        });
    }

    if(action.type === DATA_LOADED){
        return Object.assign({},state,{
            post: state.post.concat(action.payload)
        });
    }

    return state;
}

export default rootReducer;