import { useEffect, useState } from "react";
import CategoryMenuItem from "./categoryMenuItem/CategoryMenuItem";
import "./css/CategoryMenuContainer.css";

interface Image {
  large_cover_image: string;
}

const CategoryMenuContainer = () => {
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
    <div>
      <label className="categoryMenuLabel">음식 카테고리 메뉴</label>
      <div className="categoryMenuContainer">
        {imgs.map((img, idx) => (
          <CategoryMenuItem img={img} idx={idx.toString()} />
        ))}
      </div>
    </div>
  );
};

export default CategoryMenuContainer;
