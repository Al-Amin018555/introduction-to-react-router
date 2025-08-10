import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const { id, body } = post
    const navigate = useNavigate();

    const {postId} = useParams();
    console.log(postId);

    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h2>Here is the details of post: {id}</h2>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;