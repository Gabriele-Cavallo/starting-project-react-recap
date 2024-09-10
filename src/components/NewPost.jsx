import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost({ onCancel, onAddPost}) {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function changeBodyHandler(event) {
        setEnteredBody(event.target.value);
    }

    function changeAuthorHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();
        const postData = {
            body: enteredBody,
            author: enteredAuthor
        };
        onAddPost(postData);
        onCancel();
    }

    return (
    <form onSubmit={submitHandler} className={classes.form}>
        <p>
        <label htmlFor="body">Text</label>
        <textarea onChange={changeBodyHandler} id="body" required rows={3} />
        </p>
        <p>
        <label htmlFor="name">Your name</label>
        <input onChange={changeAuthorHandler} type="text" id="name" required />
        </p>
        <p className={classes.actions}>
            <button onClick={onCancel} type='button'>Cancel</button>
            <button>Submit</button>
        </p>
    </form>
    );
}

export default NewPost;