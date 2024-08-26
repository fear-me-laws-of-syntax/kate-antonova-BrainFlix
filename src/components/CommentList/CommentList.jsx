import { useState, useEffect } from "react";
import CommentItem from "../CommentItem/CommentItem";
import CommentForm from "../CommentForm/CommentForm";
import "./CommentList.scss";

export default function CommentList({ comments = [] }) {
  const [commentList, setCommentList] = useState(comments);

  const handleAddComment = (newComment) => {
    setCommentList([newComment, ...commentList]);
  };

  useEffect(() => {
    setCommentList(comments);
  }, [comments]);

  return (
    <>
      <h2>{commentList.length} Comments</h2>
      <CommentForm onAddComment={handleAddComment} />
      <div className="comments">
        {commentList.map((comment) => (
          <CommentItem key={comment.id} commentVideo={comment} />
        ))}
      </div>
    </>
  );
}
