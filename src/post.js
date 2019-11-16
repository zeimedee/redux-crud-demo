import React,{ useState} from 'react'
import {useDispatch} from 'react-redux';
import {addPost} from './reducers/actions'

function Post() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState(''); 
    const dispatch = useDispatch();

    const handleSubmit=(e)=>{
        e.preventDefault();
        let post = {title:title,
                    body:body}
        dispatch(addPost(post));
        setTitle('');
        setBody('');
    }


    return (
        <div>

        <form onSubmit={handleSubmit}>
        <div>
            <input
                type='text'
                id='title'
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
        </div>
        <div>
            <textarea
                type='text'
                id='body'
                value={body}
                onChange={e => setBody(e.target.value)}
            />
        </div>
        <div>
            <button type='submit'>Add Post</button>
        </div>

        </form>
            
        </div>
    )
}

export default Post;
