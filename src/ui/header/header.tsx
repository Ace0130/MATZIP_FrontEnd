import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";
import Dropdown from "../../components/dropdown/dropdown";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();

  /** 로그인 버튼을 누르면 /login 페이지로 이동하는 함수 */
  const clickLoginBtn = () => {
    navigate("/login");
  };

  return (
    <div className="header">
      <Logo />
      <div className="searchBar">
        <input
          className="input"
          type="text"
          placeholder="검색할 키워드를 입력해주세요."
        />
        <button>
          <img src="./images/search.svg" alt="아이콘" />
        </button>
      </div>
    </div>
  );
};

export default Header;
