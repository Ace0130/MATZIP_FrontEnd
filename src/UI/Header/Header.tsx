import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  /** 로그인 버튼을 누르면 /login 페이지로 이동하는 함수 */
  const clickLoginBtn = () => {
    navigate("/login");
  };

  /** 프로필 버튼을 누르면 /profile 페이지로 이동하는 함수 */
  const clickProfileBtn = () => {
    navigate("/profile");
  };

  return (
    <div className="header">
      <div>로고</div>
      <div className="searchBar">
        <input
          className="input"
          type="text"
          placeholder="검색할 키워드를 입력해주세요."
        />
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className="btnContainer">
        <button className="loginBtn" onClick={clickLoginBtn}>
          로그인
        </button>
        <button className="profileBtn" onClick={clickProfileBtn}>
          <FontAwesomeIcon className="profileIcon" icon={faUser} size="2x" />
        </button>
        <button className="favoritesBtn">
          <FontAwesomeIcon icon={faHeart} size="3x" />
        </button>
      </div>
    </div>
  );
};

export default Header;
