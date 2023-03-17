import CategoryContainer from "./categoryContainer/CategoryContainer";
import "./css/MainSectionContainer.css";

const MainSectionContainer = () => {
  return (
    <div className="mainSectionContainer">
      메인화면입니다.
      <CategoryContainer />
    </div>
  );
};

export default MainSectionContainer;
