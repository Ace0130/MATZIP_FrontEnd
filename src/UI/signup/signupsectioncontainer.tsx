import LabelInput from "../../components/LabelInput/LabelInput";

const SignUpSectionContainer = () => {
  return (
    <div className="sWrapper">
      <div className="signSection">
        <div className="sName">
          <LabelInput
            labelName=""
            inputType="name"
            placeHolder="이름을 입력해주세요"
          />
        </div>

        <div className="sEmail">
          <LabelInput
            labelName=""
            inputType="email"
            placeHolder="이메일을 입력해주세요."
          />
        </div>

        <div className="sPW">
          <LabelInput
            labelName=""
            inputType="password"
            placeHolder="비밀번호를 입력해주세요"
          />
        </div>

        <div className="sPW2">
          <LabelInput
            labelName=""
            inputType="password"
            placeHolder="입력한 비밀번호를 다시 입력해주세요."
          />
        </div>

        <div className="signupC">
          <input
            type="radio"
            placeholder="회원가입"
            name="Sign"
            id="Sign"
            style={{ display: "none" }}
          ></input>
          <label className="Fontsize" htmlFor="Login">
            회원가입
          </label>
        </div>
      </div>
    </div>
  );
};

export default SignUpSectionContainer;
