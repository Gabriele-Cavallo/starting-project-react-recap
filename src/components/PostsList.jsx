import NewPost from "./NewPost";
import Post from "./Post";
import classes from './PostsList.module.css'
import { useState } from 'react';
import Modal from "./Modal";



export default function PostsList({isPosting, onStopPosting}) {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function changeBodyHandler(event) {
        setEnteredBody(event.target.value);
    }

    function changeAuthorHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    let modalContent;

    if(isPosting){
        modalContent = (
            <Modal onClose={onStopPosting}>
                <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler} />
            </Modal>
        )
    };

    return (
        <>
            {modalContent}
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author="Manuel" body="Check out the full course!" />
            </ul>
        </>
    )
}