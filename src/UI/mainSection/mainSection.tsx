import TodaysRecommendMenuBanner from "./todaysRecommendBanner";
import CategoryContainer from "./categoryContainer";
import PopularRestaurantsMenuContainer from "./popularRestaurantsConatiner";
import "./css/mainSection.css";

const MainSection = () => {
  return (
    <div className="mainSectionContainer">
      <TodaysRecommendMenuBanner />
      <CategoryContainer />
      <PopularRestaurantsMenuContainer />
    </div>
  );
};

export default MainSection;
