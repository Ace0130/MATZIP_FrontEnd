import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./css/ProfileBtn.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  /** 프로필 버튼을 누르면 /profile 페이지로 이동하는 함수 */
  const clickProfileBtn = () => {
    navigate("/profile");
  };

  return (
    <div>
      <button className="profileBtn" onClick={clickProfileBtn}>
        <FontAwesomeIcon className="profileIcon" icon={faUser} size="2x" />
      </button>
    </div>
  );
};

export default Profile;
