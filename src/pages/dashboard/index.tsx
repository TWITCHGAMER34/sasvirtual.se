import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import "./dashboardStyles.scss";
import { CreatePost } from "./createPost.tsx";
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
        </motion.p>
      </section>
      <CreatePost />
      <section className="posts">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Posts
        </motion.h2>
        {!postQuery.data ? (
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            No posts available.
          </motion.p>
        ) : (
          <>
            {postQuery.data.map((post: any) => (
              <Post key={post.id} post={post} />
            ))}
          </>
        )}
      </section>
    </>
  );
}

function Post({ post }: { post: any }) {
  return (
    <>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </>
  );
}
