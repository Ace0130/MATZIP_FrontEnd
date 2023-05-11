import LabelInput from "../../components/LabelInput";
import "./css/signupSection.css";
import { Link } from "react-router-dom";

const SignUpSection = () => {
  return (
    <div className="sSection">
      <div className="sWindow">
        <Link to="/">
          <img src="./images/logo.svg" alt="로고" className="Logo" />
        </Link>
        <LabelInput
          labelName=""
          inputType="id"
          placeHolder="사용하실 아이디를 입력해주세요"
        />
        <LabelInput
          labelName=""
          inputType="password"
          placeHolder="비밀번호를 입력해주세요"
        />
        <LabelInput
          labelName=""
          inputType="password"
          placeHolder="입력하신 비밀번호를 다시 입력해주세요"
        />
        <LabelInput
          labelName=""
          inputType="tel"
          pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
          placeHolder="전화번호를 입력해주세요"
        />
        <button className="sBtn">로그인</button>
        <a href="" className="findPw">
          비밀번호를 잃어버리셨나요?
        </a>
      </div>
      <div className="toSignup">
        <span>아이디가 있으신가요?</span>
        <Link to="/login">로그인</Link>
      </div>
    </div>
  );
};

export default SignUpSection;
