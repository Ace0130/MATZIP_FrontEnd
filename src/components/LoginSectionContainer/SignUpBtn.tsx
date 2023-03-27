import { useNavigate } from "react-router-dom";

function SignUpBtn() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/signup");
  };

  return <button onClick={onClick}>회원가입</button>;
}

export default SignUpBtn;
