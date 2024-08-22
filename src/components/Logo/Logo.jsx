import { Link } from "react-router-dom";
import "./Logo.scss";
// import logo from "../../assets/logo/BrainFlix-logo.svg";

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
