import LabelInput from "../../components/LabelInput";
import PageChangeBtn from "../../components/PageChangeBtn";
import "./css/loginSection.css";

const LoginSection = () => {
  return (
    <div className="wrapper">
      <div className="goTo">
        <div className="changeBtn">
          <PageChangeBtn state="login" id="loginChangeBtn" text="로그인" />
        </div>

        <div className="signUpBtn">
          <PageChangeBtn state="signup" id="signupChangeBtn" text="회원가입" />
        </div>
      </div>

      <div className="loginContainer">
        <div className="loginInput input-t-m">
          <img
            className="inputIcon"
            src="https://api.iconify.design/material-symbols:person.svg?color=gray"
            alt="아이콘"
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
            alt="아이콘"
          ></img>
          <LabelInput
            labelName=""
            inputType="password"
            placeHolder="비밀번호를 입력해주세요"
          />
        </div>
        <div className="loginBtn">
          <input
            type="radio"
            placeholder="로그인"
            name="Login"
            id="Login"
            style={{ display: "none" }}
          ></input>
          <label className="fontsize" htmlFor="Login">
            로그인
          </label>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;
