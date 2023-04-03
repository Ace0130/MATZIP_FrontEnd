import LabelInput from "../LabelInput/LabelInput";
import "./css/LoginSectionContainer.css";
import { useNavigate } from "react-router-dom";

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

      <div className="LoginContainer">
        <div className="loginInput input-t-m">
          <img
            className="inputIcon"
            src="https://api.iconify.design/material-symbols:person.svg?color=gray"
          ></img>
          <LabelInput
            labelName=""
            inputType="email"
            placeHolder="이메일을 입력해주세요"
          />
        </div>
        <div className="loginInput input-b-m">
          <img
            className="inputIcon"
            src="https://api.iconify.design/material-symbols:lock-sharp.svg?color=gray"
          ></img>
          <LabelInput
            labelName=""
            inputType="password"
            placeHolder="비밀번호를 입력해주세요"
          />
        </div>
        <div className="LoginBtn">
          <input
            type="radio"
            placeholder="로그인"
            name="Login"
            id="Login"
            style={{ display: "none" }}
          ></input>
          <label htmlFor="Login">로그인</label>
        </div>
      </div>
    </div>
  );
};

export default LoginSectionContainer;
