import LabelInput from "../../components/LabelInput";
import "./css/loginSection.css";

const LoginSection = () => {
  return (
    <div className="lSection">
      <div className="lWindow">
        <img src="./images/logo.svg" alt="로고" className="Logo" />
        <LabelInput
          labelName=""
          inputType="id"
          placeHolder="아이디를 입력해주세요"
        />
        <LabelInput
          labelName=""
          inputType="pw"
          placeHolder="비밀번호를 입력해주세요"
        />
        <button className="lBtn">로그인</button>
        <a href="" className="findPw">
          비밀번호를 잃어버리셨나요?
        </a>
      </div>
      <div className="toSignup">
        <span>아이디가 없으신가요?</span>
        <a href="../../pages/signUp.tsx">회원가입</a>
      </div>
    </div>
  );
};

export default LoginSection;
