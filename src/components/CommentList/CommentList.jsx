import CommentItem from "../CommentItem/CommentItem";
import CommentForm from "../CommentForm/CommentForm";
import "./CommentList.scss";

export default function CommentList({ comments = [] }) {
  return (
    <>
      <h2>{comments.length} Comments</h2>
      <CommentForm />
      <div className="comments">
        {comments.map((comment) => (
          <CommentItem key={comment.id} commentVideo={comment} />
        ))}
      </div>
    </>
  );
}


