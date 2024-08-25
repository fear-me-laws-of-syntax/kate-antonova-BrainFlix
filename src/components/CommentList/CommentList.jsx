// import CommentItem from "../CommentItem/CommentItem";
// import CommentForm from "../CommentForm/CommentForm";
// import "./CommentList.scss";

// import axios from 'axios';


// function CommentList({ comments }) {
//   return (
//     <>
//       <h2>{comments?.length} Comments</h2>
//       <CommentForm />
//       <div className="comments">
//         {comments?.map((comment) => (
//           <CommentItem key={comment.id} commentVideo={comment} />
//         ))}

//       </div>
//     </>
//   );
// }


// export default CommentList;



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
