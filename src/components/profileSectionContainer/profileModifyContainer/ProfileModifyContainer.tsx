import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./css/ProfileModifyContainer.css";
import ProfileInfoModifyContainer from "./profileInfoModifyContainer/ProfileInfoModifyContainer";

const ProfileModifyContainer = () => {
  return (
    <div className="profileModifyContainer">
      <label htmlFor="hidden" className="profileImgBtn">
        <FontAwesomeIcon icon={faUser} className="profileImg" size="6x" />
      </label>
      <input type="file" id="hidden" accept="image/*" />
      <ProfileInfoModifyContainer />
    </div>
  );
};

export default ProfileModifyContainer;
