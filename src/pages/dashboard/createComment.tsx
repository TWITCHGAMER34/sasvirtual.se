import { FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../../main.tsx";
import { queryClient } from "../../providers.tsx";

export default function CreateComment() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [message, setCommentContent] = useState("");

  const commentMutation = useMutation({
    mutationFn: () =>
      axios.post(`${BASE_URL}/comment`, {
        message: message,
      }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["comments"],
      });
      setCommentContent("");
    },
  });

  function handleComment() {
    setIsFormVisible(!isFormVisible);
  }

  function HandleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("message: ", message);
    commentMutation.mutate();
  }

  return (
    <>
      <button id="commentButton" onClick={handleComment}>
        Comment
      </button>
      <div className={`commentBox ${isFormVisible ? "active" : ""}`}>
        <form onSubmit={HandleSubmit}>
          <h2>Create a Comment</h2>
          {commentMutation.isSuccess && <p>Comment created successfully!</p>}
          <p>{message.length} /250</p>
          <textarea
            id="commentContent"
            name="commentContent"
            placeholder="Content"
            required
            value={message}
            onChange={(e) =>
              setCommentContent(e.target.value.substring(0, 255))
            }
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
