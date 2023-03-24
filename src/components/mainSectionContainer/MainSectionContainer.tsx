import CategoryContainer from "./categoryContainer/CategoryContainer";
import "./css/MainSectionContainer.css";
import TodaysRecommendMenuBanner from "./todaysRecommendMenuBanner/TodaysRecommendMenuBanner";

const MainSectionContainer = () => {
  return (
    <div className="mainSectionContainer">
      <CategoryContainer />
      <TodaysRecommendMenuBanner />
    </div>
  );
};

export default MainSectionContainer;
