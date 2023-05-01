import { useState, useEffect } from "react";
import axios from "axios";
import CategoryBtn from "../../components/CategoryBtn";
import MenuItem from "../../components/MenuItem";
import "./css/categoryContainer.css";

interface Image {
  large_cover_image: string;
}

const CategoryContainer = () => {
  const DATA_LENGTH = 6;
  const foodCategorys = ["한식", "일식", "중식", "양식", "랜덤 메뉴 추천"];
  const [imgs, setImgs] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    // FIXME: 윤기 사마가 금일 중으로 서버 열어준다고 하셔서 다른 rest api로 테스트한거니까 신경쓰지마셈
    await axios
      .get("https://yts.mx/api/v2/list_movies.json")
      .then((response) => {
        const dataLength = response.data.data.movies.length;
        response.data.data.movies.length =
          dataLength > DATA_LENGTH ? DATA_LENGTH : dataLength;

        setImgs(response.data.data.movies);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? null : (
        <div className="categoryContainer">
          <label className="categoryLabel">음식 카테고리</label>
          <div className="categoryBtnContainer">
            {foodCategorys.map((foodCategory, idx) => (
              <CategoryBtn key={idx} context={foodCategory} />
            ))}
          </div>
          <div className="categoryMenuContainer">
            {imgs.map((img, idx) => (
              <MenuItem key={idx} img={img} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryContainer;
