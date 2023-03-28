import { useNavigate } from "react-router";
import LabelInput from "./LabelInput";
import "./css/LoginSectionContainer.css";

const LoginSectionContainer = () => {
  const navigate = useNavigate();

  /** 로그인 페이지로 이동하는 함수 */
  const goToLogin = () => {
    navigate("/login");
  };

  /** 회원가입 페이지로 이동하는 함수 */
  const goToSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="loginContainer">
      <div className="goToContainer">
        <button onClick={goToLogin}>로그인</button>
        <button onClick={goToSignUp}>회원가입</button>
      </div>
      <div className="inputContainer">
        <LabelInput
          labelName="이메일"
          inputType="email"
          placeHolder="이메일을 입력해주세요"
        />
        <LabelInput
          labelName="비밀번호"
          inputType="password"
          placeHolder="비밀번호를 입력해주세요"
        />
      </div>
      <button className="loginBtn">로그인</button>
      <div className="btnContainer">
        <button className="findBtn">아이디 찾기</button>
        <button className="findBtn">비밀번호 찾기</button>
      </div>
    </div>
  );
};

export default LoginSectionContainer;
