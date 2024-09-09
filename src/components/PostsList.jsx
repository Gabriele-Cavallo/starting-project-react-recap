import Post from "./Post";
import classes from './PostsList.module.css'


export default function PostsList() {
    return (
        <ul className={classes.posts}>
            <Post author="Maximillian" body="React.js is awesome!" />
            <Post author="Manuel" body="Check out the full course!" />
        </ul>
    )
}