import { MdDelete } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card " style={{ width: "70%" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>

        {post.tags.map((tag) => (
          <span className="badge text-bg-info marginInTags">{tag}</span>
        ))}
        <div className="alert alert-primary" role="alert">
          This post has been reacted by : {post.reactions} people. <FcLike />
        </div>

        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}
        >
        <MdDelete />
        </span>
      </div>
    </div>
  );
};
export default Post;
