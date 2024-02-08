import { FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../../main.tsx";
import { queryClient } from "../../providers.tsx";

export function CreatePost() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [postImage, setPostImage] = useState(null);

  const postMutation = useMutation({
    mutationFn: () =>
      axios.post(`${BASE_URL}/post`, {
        title: postTitle,
        content: postContent,
      }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
      setPostTitle("");
      setPostContent("");
      setPostImage(null);
    },
  });

  function handlePost() {
    setIsFormVisible(!isFormVisible);
  }

  function HandleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    postMutation.mutate();
  }

  return (
    <>
      <button id="postButton" onClick={handlePost}>
        Post
      </button>
      <div className={`postBox ${isFormVisible ? "active" : ""}`}>
        <form onSubmit={HandleSubmit}>
          <h2>Create a Post</h2>
          {postMutation.isSuccess && <p>Post created successfully!</p>}
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            placeholder="Title"
            required
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          ></input>
          <textarea
            id="postContent"
            name="postContent"
            placeholder="Content"
            required
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          ></textarea>
          {/*          <input
              type="file"
              id="postImage"
              name="postImage"
              accept="image/*"
              onChange={(e) => setPostImage(e.target.files[0])}
            ></input>*/}
          <input type="submit" value="Submit" id="postSubmit"></input>
        </form>
      </div>
    </>
  );
}
