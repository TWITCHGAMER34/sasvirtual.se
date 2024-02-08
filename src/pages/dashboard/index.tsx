import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import "./dashboardStyles.scss";
import { CreatePost } from "./createPost.tsx";
import CreateComment from "./createComment.tsx";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../../main.tsx";

export default function DashboardPage() {
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => axios.get(`${BASE_URL}/posts`).then((res) => res.data),
  });
  return (
    <>
      <Helmet title={"Dashboard"} />
      <section className="content">
        <motion.h1
          className={"dashboardh1"}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Dashboard
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to the SAS Virtual Dashboard.
          <br />
        </motion.p>
        <CreatePost />
      </section>
      <section className="posts">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Posts
        </motion.h2>
        {postQuery.data && postQuery.data.length > 0 ? (
          postQuery.data.map((post: any) => <Post key={post.id} post={post} />)
        ) : (
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            No posts available.
          </motion.p>
        )}
      </section>
    </>
  );
}

function Post({ post }: { post: any }) {
  const CommentQuery = useQuery({
    queryKey: ["comments", post.id],
    queryFn: () =>
      axios.get(`${BASE_URL}/comments/${post.id}`).then((res) => res.data),
  });
  return (
    <div className="post-card">
      <h2>{post.title}</h2>
      <h3>{post.username}</h3>
      <p>{new Date(post.created_at).toLocaleString()}</p>
      <p>{post.content}</p>
      {post.image_url && (
        <img src={`${BASE_URL}/uploads/${post.image_url}`} alt="Post image" />
      )}
      <CreateComment id={post.id} />
      {CommentQuery.data && CommentQuery.data.length > 0 ? (
        CommentQuery.data.map((comment: any, index: number) => (
          <div key={index} className={"Comment-box"}>
            <p>Comment:</p>
            <p> {comment.username} </p>
            <p> {comment.created_at} </p>
            <p> {comment.message}</p>
          </div>
        ))
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
}
