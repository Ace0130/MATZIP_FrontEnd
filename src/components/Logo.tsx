import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <img src="./images/logo.svg" alt="로고" />
    </Link>
  );
};

export default Logo;
