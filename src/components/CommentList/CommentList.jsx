import './CommentList.scss';

const CommentList = ({text, imageUrl}) => {
  return (
    <div className="button">
      <button className="button-filler">
        <img 
          src={imageUrl} 
          className="icon" 
        />
        {text}
    
      </button>
      </div>
  );
};

export default CommentList;