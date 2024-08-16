import './Button.scss';

let Button = ({text, imageUrl}) => {
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

export default Button;
