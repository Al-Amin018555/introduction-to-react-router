import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
    const { id, title } = post;
    const navigate = useNavigate();

    const postStyle = {
        border: '2px solid red',
        padding: '5px',
        borderRadius: '10px',
    }
    const handleShowDetails = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h2>Post Details About: </h2>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Show Details</Link>
            <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link>
            <button onClick={handleShowDetails}>Click for more details</button>
        </div >
    );
};

export default Post;