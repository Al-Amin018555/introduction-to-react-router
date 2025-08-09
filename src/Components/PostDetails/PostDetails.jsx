import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const { id, body } = post
    return (
        <div>
            <h2>Here is the details of post: {id}</h2>
            <p><small>{body}</small></p>
        </div>
    );
};

export default PostDetails;