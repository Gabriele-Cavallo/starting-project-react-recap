import NewPost from "./NewPost";
import Post from "./Post";
import classes from './PostsList.module.css'
import { useState } from 'react';
import Modal from "./Modal";



export default function PostsList({isPosting, onStopPosting}) {
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData){
        setPosts(exitingPosts => [postData, ...exitingPosts])
    }

    let modalContent;

    if(isPosting){
        modalContent = (
            <Modal onClose={onStopPosting}>
                <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
            </Modal>
        )
    };

    return (
        <>
            {modalContent}
            {posts.length > 0 ? <ul className={classes.posts}>
                {posts.map(post => <Post key={post.body} author={post.author} body={post.body} />)}
            </ul> :
            <div style={{textAlign: 'center', color: 'white'}}>
                <h2>There are no posts yet.</h2>
                <p>Start adding some!</p>
            </div>
            }
        </>
    )
}