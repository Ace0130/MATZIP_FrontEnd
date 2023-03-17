import { useState, useEffect } from "react";
import CategoryBtn from "./CategoryBtn";
import CategoryMenuItem from "./CategoryMenuItem";
import "./css/CategoryContainer.css";

interface Image {
  large_cover_image: string;
}

const CategoryContainer = () => {
  const [foodCategorys, setFoodCategorys] = useState([
    "한식",
    "일식",
    "중식",
    "양식",
    "랜덤 메뉴 추천",
  ]);
  const [imgs, setImgs] = useState<Image[]>([]);

  const fetchData = () => {
    // FIXME: 윤기 사마가 금일 중으로 서버 열어준다고 하셔서 다른 rest api로 테스트한거니까 신경쓰지마셈
    fetch("https://yts.mx/api/v2/list_movies.json")
      .then((response) => response.json())
      .then((json) => {
        if (json.data.movies.length > 8) {
          json.data.movies.length = 8;
        }
        setImgs(json.data.movies);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="categoryContainer">
      <label className="categoryLabel">음식 카테고리</label>
      <div className="categoryBtnContainer">
        {foodCategorys.map((foodCategory, idx) => (
          <CategoryBtn key={idx} context={foodCategory} />
        ))}
      </div>
      <label className="categoryMenuLabel">음식 카테고리 메뉴</label>
      <div className="categoryMenuContainer">
        {imgs.map((img, idx) => (
          <CategoryMenuItem key={idx} img={img} />
        ))}
      </div>
    </div>
  );
};

export default CategoryContainer;
