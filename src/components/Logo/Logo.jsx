import { Link } from "react-router-dom";
import "./Logo.scss";

function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img
          src="../../src/assets/logo/BrainFlix-logo.svg"
          alt="BrainFlix logo"
        />
      </Link>
    </div>
  );
}

export default Logo;
