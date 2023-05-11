import LabelInput from "../../components/LabelInput";
import "./css/loginSection.css";
import { Link } from "react-router-dom";

const LoginSection = () => {
  return (
    <div className="lSection">
      <div className="lWindow">
        <Link to="/">
          <img src="./images/logo.svg" alt="로고" className="Logo" />
        </Link>
        <LabelInput
          labelName=""
          inputType="email"
          placeHolder="아이디를 입력해주세요"
        />
        <LabelInput
          labelName=""
          inputType="password"
          placeHolder="비밀번호를 입력해주세요"
        />
        <button className="lBtn">로그인</button>
        <a href="" className="findPw">
          비밀번호를 잃어버리셨나요?
        </a>
      </div>
      <div className="toSignup">
        <span>아이디가 없으신가요?</span>
        <Link to="/signUp">회원가입</Link>
      </div>
    </div>
  );
};

export default LoginSection;
