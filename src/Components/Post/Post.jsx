import { Link } from "react-router-dom";

const Post = ({ post }) => {
    const { id, title } = post;
    const postStyle = {
        border: '2px solid red',
        padding: '5px',
        borderRadius: '10px',
    }
    return (
        <div style={postStyle}>
            <h2>Post Details About: </h2>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Show Details</Link>
            <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link>
        </div >
    );
};

export default Post;