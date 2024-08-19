import addCommentIcon from "../../assets/icons/add_comment.svg";
import UserPhoto from "../UserPhoto/UserPhoto";
import Button from "../Button/Button";

import "./CommentForm.scss";

export default function CommentForm() {
  return (
    <div className="comment-form">

<div className="user-photo-padding">
      <UserPhoto />
      </div>

      <div className="comment-form--input">
        <div className="conversation__form--group">
          <label className="conversation__form-label" htmlFor="msg">
           JOIN THE CONVERSATION
          </label>
          <textarea
            id="msg"
            name="user_message"
            placeholder="Add a new comment"
          ></textarea>
        </div>

        <Button className="button" text="COMMENT" imageUrl={addCommentIcon} />
      </div>
    </div>
  );
}
