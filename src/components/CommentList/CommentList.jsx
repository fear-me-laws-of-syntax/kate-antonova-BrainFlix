import './CommentList.scss';
import addCommentIcon from "../../assets/icons/add_comment.svg"
import UserPhoto from "../UserPhoto/UserPhoto"
import Button from "../Button/Button";


function CommentList (){
    return (
          <>
      <UserPhoto />
    <div className="conversation__form-group">
    <label className="conversation__form-label" for="msg">JOIN THE CONVERSATION</label>
    <textarea id="msg" name="user_message" placeholder="Add a new comment"></textarea>
                        </div>
        <Button text="COMMENT" imageUrl={addCommentIcon} />
        </>
    );
}

export default CommentList;