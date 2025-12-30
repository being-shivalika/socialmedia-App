import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostListContext } from "../store/PostsListstore.jsx";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);

  return (
    <div className="card post-card" style={{ width: "30rem", margin: "20px" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
            style={{ cursor: "pointer" }}
          >
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>

        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary btn-tag me-1">
            {tag}
          </span>
        ))}

        <div
          className="alert alert-success reactions-alert"
          role="alert"
          style={{ marginTop: "15px" }}
        >
          {/* Fixed: Accessing .likes and .dislikes from the reactions object */}
          This post has {post.reactions?.likes || 0} likes and{" "}
          {post.reactions?.dislikes || 0} dislikes.
        </div>
      </div>
    </div>
  );
};

export default Post;
