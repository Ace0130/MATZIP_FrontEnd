import LabelInput from "../LabelInput";
/**import "./scss./InfoInput.scss";
import "./scss./LoginSectionContainer.scss";*/

const LoginSectionContainer = () => {
  return (
    <div>
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
      <label htmlFor="button"></label>
      <input type="button" name="button" placeholder="로그인"></input>
    </div>
  );
};

export default LoginSectionContainer;
