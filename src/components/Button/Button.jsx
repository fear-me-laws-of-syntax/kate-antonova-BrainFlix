import "./Button.scss";

let Button = ({ text, imageUrl }) => {
  return (
    <button className="button">
      <img src={imageUrl} className="button__icon" />
      {text}
    </button>
  );
};

export default Button;
