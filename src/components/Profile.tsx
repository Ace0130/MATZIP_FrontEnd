import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./css/Profile.css";

const Profile = () => {
  return (
    <div>
      <button className="profileBtn">
        <FontAwesomeIcon className="profileIcon" icon={faUser} size="2x" />
      </button>
    </div>
  );
};

export default Profile;
