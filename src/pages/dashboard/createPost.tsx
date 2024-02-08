import { ChangeEvent, FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../../main.tsx";
import { queryClient } from "../../providers.tsx";

export function CreatePost() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [postImage, setPostImage] = useState<null | File>(null);
  const [postImagePreview, setPostImagePreview] = useState<null | string>(null);

  const postMutation = useMutation({
    mutationFn: () => {
      const formData = new FormData();
      formData.append("title", postTitle);
      formData.append("content", postContent);
      postImage && formData.append("image", postImage);
      return axios.post(`${BASE_URL}/post`, formData);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
      setPostTitle("");
      setPostContent("");
      setPostImage(null);
      setPostImagePreview(null);
      setIsFormVisible(false);
    },
  });

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files?.length < 1) return;
    const blobUrl = URL.createObjectURL(files[0]);
    setPostImagePreview(blobUrl);
    setPostImage(files[0]);
  };

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
          <p>{postContent.length} /255</p>
          <textarea
            id="postContent"
            name="postContent"
            placeholder="Content"
            required
            value={postContent}
            onChange={(e) => setPostContent(e.target.value.substring(0, 255))}
          ></textarea>
          <label htmlFor="postImage" className={"upload-label"}>
            Upload pictures
          </label>
          <input
            type="file"
            id="postImage"
            name="postImage"
            accept="image/*"
            onChange={handleImageChange}
          ></input>
          {postImagePreview && (
            <img className={"preview-image"} src={postImagePreview}></img>
          )}
          <input type="submit" value="Submit" id="postSubmit"></input>
        </form>
      </div>
    </>
  );
}
