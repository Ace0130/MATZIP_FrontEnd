import { useNavigate } from "react-router-dom";

function SignUpBtn() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/signup");
  };

  return (
    <div>
      <input
        type="radio"
        placeholder="회원가입"
        name="SignupBtn"
        id="SignupBtn"
        onClick={onClick}
        style={{ display: "none" }}
      ></input>
      <label htmlFor="SignupBtn">회원가입</label>
    </div>
  );
}

export default SignUpBtn;
