import LoginBtn from "./LoginBtn";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import ProfileBtn from "./ProfileBtn";
import FavoritesBtn from "./FavortiesBtn";
import "./css/Header.css";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <SearchBar />
      <div className="btnContainer">
        <LoginBtn />
        <ProfileBtn />
        <FavoritesBtn />
      </div>
    </div>
  );
};

export default Header;
