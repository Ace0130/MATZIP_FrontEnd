import { useEffect, useState } from "react";
import axios from "axios";
import "./css/popularRestaurantsContainer.css";

interface Image {
  large_cover_image: string;
}

const PopularRestaurantsContainer = () => {
  const DATA_LENGTH = 8;
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
        <div className="popularRestaurantsContainer">
          <label>인기 식당 메뉴</label>
          <div className="popularRestaurantsMenuContainer">
            {imgs.map((img, idx) => (
              <img
                key={idx.toString()}
                className="popularRestaurantsMenuItem"
                src={img.large_cover_image}
                alt="사진"
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default PopularRestaurantsContainer;
