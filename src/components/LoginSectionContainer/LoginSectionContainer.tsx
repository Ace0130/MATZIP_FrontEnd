import LabelInput from "../LabelInput/LabelInput";
import "./css/LoginSectionContainer.css";
import LoginChangeBtn from "./LoginBtn";
import SignUpBtn from "./SignUpBtn";

const LoginSectionContainer = () => {
  return (
    <div className="Wrapper">
      <div className="GoTo">
        <div className="LoginChangeBtn">
          <LoginChangeBtn />
        </div>

        <div className="SignUpBtn">
          <SignUpBtn />
        </div>
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
