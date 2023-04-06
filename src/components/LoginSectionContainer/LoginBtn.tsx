import { useNavigate } from "react-router-dom";

function LoginChangeBtn() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <input
        type="radio"
        placeholder="로그인"
        name="LoginChangeBtn"
        id="LoginChangeBtn"
        onClick={onClick}
        style={{ display: "none" }}
      ></input>
      <label className="Fontsize" htmlFor="LoginChangeBtn">
        로그인
      </label>
    </div>
  );
}

export default LoginChangeBtn;
