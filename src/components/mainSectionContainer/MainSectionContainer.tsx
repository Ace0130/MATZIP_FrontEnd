import CategoryContainer from "./CategoryContainer";
import TodaysRecommendMenuBanner from "./TodaysRecommendMenuBanner";
import PopularRestaurantsMenuItem from "./PopualarRestaurantsMenuItem";
import "./css/MainSectionContainer.css";

const MainSectionContainer = () => {
  return (
    <div className="mainSectionContainer">
      <TodaysRecommendMenuBanner />
      <CategoryContainer />
      <PopularRestaurantsMenuItem />
    </div>
  );
};

export default MainSectionContainer;
