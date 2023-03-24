import CategoryContainer from "./categoryContainer/CategoryContainer";
import "./css/MainSectionContainer.css";
import PopularRestaurantsMenuItem from "./popularRestaurantsContainer/PopualarRestaurantsMenuItem";
import TodaysRecommendMenuBanner from "./todaysRecommendMenuBanner/TodaysRecommendMenuBanner";

const MainSectionContainer = () => {
  return (
    <div className="mainSectionContainer">
      <CategoryContainer />
      <TodaysRecommendMenuBanner />
      <PopularRestaurantsMenuItem />
    </div>
  );
};

export default MainSectionContainer;
