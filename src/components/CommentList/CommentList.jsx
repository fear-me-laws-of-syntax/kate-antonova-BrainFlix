import CommentItem from "../CommentItem/CommentItem";
import CommentForm from "../CommentForm/CommentForm";
import "./CommentList.scss";

function CommentList({ comments }) {
  return (
    <>
      <p>{comments.length} Comments</p>
      <CommentForm />
      <div className="comments">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </>
  );
}

export default CommentList;
