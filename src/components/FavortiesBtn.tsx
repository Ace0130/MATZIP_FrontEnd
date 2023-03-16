import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./css/FavoritesBtn.css";

const FavoritesBtn = () => {
  return (
    <div>
      <button className="faHeart">
        <FontAwesomeIcon className="faHeartIcon" icon={faHeart} size="2x" />
      </button>
    </div>
  );
};

export default FavoritesBtn;
