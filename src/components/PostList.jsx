import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/PostsListstore.jsx";
import WelcomeMessage from "./WelcomeMessage.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListContext);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        setFetching(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error("Fetch error:", err);
          setFetching(false);
        }
      });

    return () => {
      console.log("Cleaning up useEffect");
      controller.abort();
    };
  }, [addInitialPost]);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
