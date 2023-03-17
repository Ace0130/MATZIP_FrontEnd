import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./css/FavoritesBtn.css";

const FavoritesBtn = () => {
  const clickIconBtn = () => {
    console.log("클릭 완료");
  };

  return (
    <div>
      <button className="faHeart">
        <FontAwesomeIcon
          className="faHeartIcon"
          onClick={clickIconBtn}
          icon={faHeart}
          size="2x"
        />
      </button>
    </div>
  );
};

export default FavoritesBtn;
