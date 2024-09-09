import classes from './NewPost.module.css';

function NewPost({onBodyChange, onAuthorChange}) {
    return (
    <form className={classes.form}>
        <p>
        <label htmlFor="body">Text</label>
        <textarea onChange={onBodyChange} id="body" required rows={3} />
        </p>
        <p>
        <label htmlFor="name">Your name</label>
        <input onChange={onAuthorChange} type="text" id="name" required />
        </p>
    </form>
    );
}

export default NewPost;