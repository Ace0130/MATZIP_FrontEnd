import LoginBtn from "./LoginBtn";
import Logo from "./Logo";
import SerachBar from "./SearchBar";
import "./css/Header.css";
import Profile from "./Profile";
import FavoritesBtn from "./FavortiesBtn";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <SerachBar />
      <div className="btnContainer">
        <LoginBtn />
        <Profile />
        <FavoritesBtn />
      </div>
    </div>
  );
};

export default Header;
