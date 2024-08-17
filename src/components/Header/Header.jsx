import "./Header.scss";
import Logo from "../Logo/Logo";
import uploadIcon from "../../assets/icons/upload.svg"

import SearchBar from '../../components/SearchBar/SearchBar';
import UserPhoto from "../UserPhoto/UserPhoto"
import Button from "../Button/Button";

function Header (){
    return (
          <>
        <nav className="header">
<Logo />
        </nav>
   <div className="header-search">
      <SearchBar />
      <UserPhoto />
      </div>
        <Button text="UPLOAD" imageUrl={uploadIcon} />
        </>
    );
}

export default Header;