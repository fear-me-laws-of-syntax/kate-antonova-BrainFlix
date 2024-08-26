import "./Header.scss";
import Logo from "../Logo/Logo";
import uploadIcon from "../../assets/icons/upload.svg";

import SearchBar from "../../components/SearchBar/SearchBar";
import UserPhoto from "../UserPhoto/UserPhoto";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Logo />

      <div className="header-group">
        <div className="header-search">
          <SearchBar />
          <UserPhoto />
        </div>
        <Link className="upload-button" to="/upload">
          <Button text="UPLOAD" imageUrl={uploadIcon} />
        </Link>

      </div>
    </header>
  );
}

export default Header;
