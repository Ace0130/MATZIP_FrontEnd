import { useNavigate } from "react-router-dom";
import "./css/LoginBtn.css";

const LoginBtn = () => {
  const navigate = useNavigate();

  /** 로그인 버튼을 누르면 /login 페이지로 이동하는 함수 */
  const clickLoginBtn = () => {
    navigate("/login");
  };

  return (
    <div>
      <button className="loginBtn" onClick={clickLoginBtn}>
        로그인
      </button>
    </div>
  );
};

export default LoginBtn;
