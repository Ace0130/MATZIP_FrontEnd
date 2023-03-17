import { useState } from "react";
import CategoryBtn from "./CategoryBtn";
import CategoryMenuContainer from "./categoryMenuContainer/CategoryMenuContainer";
import "./css/CategoryContainer.css";

const CategoryContainer = () => {
  const [foodCategorys, setFoodCategorys] = useState([
    "한식",
    "일식",
    "중식",
    "양식",
    "랜덤 메뉴 추천",
  ]);

  return (
    <div className="categoryContainer">
      <label className="categoryLabel">음식 카테고리</label>
      <div className="categoryBtnContainer">
        {foodCategorys.map((foodCategory, index) => (
          <CategoryBtn key={index} context={foodCategory} />
        ))}
      </div>
      <CategoryMenuContainer />
    </div>
  );
};

export default CategoryContainer;
