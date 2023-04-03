import TodaysRecommendMenuBanner from "./TodaysRecommendMenuBanner";
import CategoryContainer from "./CategoryContainer";
import PopularRestaurantsMenuContainer from "./PopularRestaurantsMenuConatiner";
import "./css/MainSectionContainer.css";

const MainSectionContainer = () => {
  return (
    <div className="mainSectionContainer">
      <TodaysRecommendMenuBanner />
      <CategoryContainer />
      <PopularRestaurantsMenuContainer />
    </div>
  );
};

export default MainSectionContainer;
