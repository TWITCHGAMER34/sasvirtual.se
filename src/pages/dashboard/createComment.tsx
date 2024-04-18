import { FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../../main.tsx";
import { queryClient } from "../../providers.tsx";
import "./dashboardStyles.scss";

/**
 * Create comment component.
 * This component is used to create a new comment.
 * It contains a form with a field for the comment content.
 * When the form is submitted, the comment data is sent to the server to create a new comment.
 * @param id
 * @constructor
 */
export default function CreateComment({ id }: { id: number }) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [message, setCommentContent] = useState("");

  const commentMutation = useMutation({
    mutationFn: () =>
      axios.post(`${BASE_URL}/comment`, {
        comment: message,
        post_id: id,
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
    commentMutation.mutate();
    setTimeout(() => {
      commentMutation.reset();
    }, 2000);
  }

  return (
    <>
      <button id="commentButton" onClick={handleComment}>
        Comment
      </button>
      <div className={`commentBox ${isFormVisible ? "active" : ""}`}>
        <form onSubmit={HandleSubmit}>
          <h2>Create a Comment</h2>
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
          <button type="submit" disabled={commentMutation.isPending}>
            Submit
          </button>
          {commentMutation.isSuccess && <p>Comment created successfully!</p>}
        </form>
      </div>
    </>
  );
}
