import "./CommentItem.scss";

function CommentItem({ comment }) {
  return (
    <li className="comment-item">
      <div className="comment-item__avatar"></div>

      <div className="comment-item__content">

        <div className="comment-item__content--name-date">
          <h2 className="comment-item__content--name">{comment.name}</h2>
          <p className="comment-item__content--date grey">
            {new Date(comment.timestamp).toLocaleDateString()}
          </p>
        </div>
        <p className="comment-item__content--text">{comment.comment}</p>

      </div>
    </li>
  );
}

export default CommentItem;
