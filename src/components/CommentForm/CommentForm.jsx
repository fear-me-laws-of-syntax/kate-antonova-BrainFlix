// import addCommentIcon from "../../assets/icons/add_comment.svg";
// import UserPhoto from "../UserPhoto/UserPhoto";
// import Button from "../Button/Button";

// import "./CommentForm.scss";

// import axios from 'axios';


// export default function CommentForm() {
//   return (
//     <div className="comment-form">

//       <div className="user-photo-padding">
//         <UserPhoto />
//       </div>

//       <div className="comment-form--input">
//         <div className="conversation__form--group">
//           <label className="conversation__form-label" htmlFor="msg">
//             JOIN THE CONVERSATION
//           </label>
//           <textarea
//             id="msg"
//             name="user_message"
//             placeholder="Add a new comment"
//           ></textarea>
//         </div>

//         <Button className="button" text="COMMENT" imageUrl={addCommentIcon} />
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import addCommentIcon from "../../assets/icons/add_comment.svg";
import UserPhoto from "../UserPhoto/UserPhoto";
import Button from "../Button/Button";
import "./CommentForm.scss";

export default function CommentForm({ onAddComment }) {
  const [comment, setComment] = useState("");
  const [commentError, setCommentError] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    let formIsValid = true;

    if (comment.trim() === "") {
      setCommentError(true);
      formIsValid = false;
    } else {
      setCommentError(false);
    }

    if (formIsValid) {
      const newComment = {
        id: Date.now().toString(),
        name: "Mohan Muruge",
        comment: comment,
        timestamp: new Date(),
      };

      onAddComment(newComment);
      setComment("");
    }
  };

  return (
    <div className="comment-form">
      <div className="user-photo-padding">
        <UserPhoto />
      </div>

      <form onSubmit={handleFormSubmit} className="comment-form--input">
        <div className="conversation__form--group">
          <label className="conversation__form-label" htmlFor="msg">
            JOIN THE CONVERSATION
          </label>
          <textarea
            id="msg"
            name="user_message"
            placeholder="Add a new comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className={commentError ? "error" : ""}
          ></textarea>
        </div>

        <Button className="button" text="COMMENT" imageUrl={addCommentIcon} />
      </form>
    </div>
  );
}
