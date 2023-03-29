import LabelInput from "../LabelInput";
import LoginChangeBtn from "./LoginBtn";
import SignUpBtn from "./SignUpBtn";
import "./css/LoginSectionContainer.css";

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
        <div className="Email">
          <LabelInput
            labelName="이메일"
            inputType="email"
            placeHolder="이메일을 입력해주세요"
          />
        </div>
        <div className="Password">
          <LabelInput
            labelName="비밀번호"
            inputType="password"
            placeHolder="비밀번호를 입력해주세요"
          />
        </div>
        <div className="LoginBtn">
          <label htmlFor="button"></label>
          <input
            type="button"
            name="button"
            placeholder="로그인"
            value="Login"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default LoginSectionContainer;
