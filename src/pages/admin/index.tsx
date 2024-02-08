import axios from "axios";
import { BASE_URL } from "../../main.tsx";

import "./adminStyles.scss";
import { useQuery } from "@tanstack/react-query";

interface User {
  id: number;
  username: string;
  email: string;
}

interface Post {
  id: number;
  title: string;
  content: string;
  user_id: number;
}

interface Comment {
  id: number;
  message: string;
  user_id: number;
  post_id: number;
}

export default function AdminPage() {
  const Users = useQuery({
    queryKey: ["users"],
    queryFn: () => axios.get(`${BASE_URL}/admin/users`).then((res) => res.data),
  });

  const Posts = useQuery({
    queryKey: ["posts"],
    queryFn: () => axios.get(`${BASE_URL}/admin/posts`).then((res) => res.data),
  });

  const Comments = useQuery({
    queryKey: ["comments"],
    queryFn: () =>
      axios.get(`${BASE_URL}/admin/comments`).then((res) => res.data),
  });

  const handleDeleteUser = async (id: number) => {
    try {
      const response = await axios.delete(`${BASE_URL}/admin/users/${id}`);
      if (response.status === 200) {
        alert("User deleted successfully");
        Users.refetch(); // Refresh the users list
      } else {
        alert("Failed to delete user");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while deleting the user");
    }
  };

  const handleDeletePost = async (id: number) => {
    try {
      const response = await axios.delete(`${BASE_URL}/admin/posts/${id}`);
      if (response.status === 200) {
        alert("Post deleted successfully");
        Posts.refetch(); // Refresh the posts list
      } else {
        alert("Failed to delete post");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while deleting the post");
    }
  };

  const handleDeleteComment = async (id: number) => {
    try {
      const response = await axios.delete(`${BASE_URL}/admin/comments/${id}`);
      if (response.status === 200) {
        alert("Comment deleted successfully");
        Comments.refetch(); // Refresh the comments list
      } else {
        alert("Failed to delete comment");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while deleting the comment");
    }
  };

  return (
    <>
      <h1 className={"adminh1"}>Admin Page</h1>
      <div className={"admin-content"}>
        {Users.data &&
          Users.data.map((user: User) => (
            <div key={user.id} className={"user-card"}>
              <h2>User:</h2>
              <div className={"user-info"}>
                <h2 className={"adminh2"}>{user.username}</h2>
                <button
                  className={"Delete-button"}
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </button>
              </div>
              <div className={"user-posts"}>
                <h2>Posts:</h2>
                {Posts.data &&
                  Posts.data
                    .filter((post: Post) => post.user_id === user.id)
                    .map((post: Post) => (
                      <div key={post.id} className="post-cards">
                        <h3 className={"adminh3"}>{post.title}</h3>
                        <p>{post.content}</p>
                        <button
                          className={"Delete-button"}
                          onClick={() => handleDeletePost(post.id)}
                        >
                          Delete
                        </button>
                        <div className={"user-comments"}>
                          <h2>Comments:</h2>
                          {Comments.data &&
                            Comments.data
                              .filter(
                                (comment: Comment) =>
                                  comment.post_id === post.id,
                              )
                              .map((comment: Comment) => (
                                <div key={comment.id} className="comment-card">
                                  <p>{comment.message}</p>
                                  <button
                                    className={"Delete-button"}
                                    onClick={() =>
                                      handleDeleteComment(comment.id)
                                    }
                                  >
                                    Delete
                                  </button>
                                </div>
                              ))}
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
