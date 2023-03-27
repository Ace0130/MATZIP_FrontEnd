import { useNavigate } from "react-router-dom";

function LoginChangeBtn() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/login");
  };

  return <button onClick={onClick}>로그인</button>;
}

export default LoginChangeBtn;
