import { useEffect, useState } from "react";
import "./css/todaysRecommendBanner.css";

interface Food {
  background_image: string;
}

const TodaysRecommendBanner = () => {
  const [prevImgIdx, setPrevImgIdx] = useState(4);
  const [imgIdx, setImgIdx] = useState(0);
  const [foods, setFoods] = useState<Food[]>([]);

  /** 서버에서 데이터를 가져오는 함수 */
  const fetchData = () => {
    fetch("https://yts.mx/api/v2/list_movies.json")
      .then((response) => response.json())
      .then((json) => {
        if (json.data.movies.length > 5) {
          json.data.movies.length = 5;
        }
        setFoods(json.data.movies);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /** 이전 이미지 인덱스와 현재 이미지 인덱스를 변경하는 함수 */
  const changeImgIdx = () => {
    setImgIdx((imgIdx) => (imgIdx + 1) % 5);
  };

  /** 현재 이미지 인덱스를 변경하여 이미지를 변경하는 함수 */
  const changeImg = (event: React.MouseEvent) => {
    if (event.target instanceof HTMLButtonElement) {
      setImgIdx(parseInt(event.target.id.substring(3)));
      setPrevImgIdx(imgIdx);
    }
  };

  useEffect(() => {
    fetchData();
    // FIXME: 이미지가 가끔 2초보다 빠르게 변경될 때가 있음. 수정 요망
    setInterval(changeImgIdx, 2000);
  }, []);

  useEffect(() => {
    setPrevImgIdx(imgIdx !== 0 ? imgIdx - 1 : 4);
  }, [imgIdx]);

  useEffect(() => {
    const enabledBtn = document.querySelector(`#btn${imgIdx.toString()}`);
    enabledBtn?.classList.add("enabled");
    const disabledBtn = document.querySelector(`#btn${prevImgIdx.toString()}`);
    disabledBtn?.classList.remove("enabled");
  }, [imgIdx, prevImgIdx]);

  return (
    <div className="todaysRecommendBanner">
      {foods.length > 0 && (
        <>
          <label>오늘의 추천 메뉴</label>
          <img src={foods[imgIdx].background_image} alt="배너 이미지" />
          <div className="imgBtnContainer">
            {foods.map((food, imgIdx) => (
              <button
                key={imgIdx}
                id={`btn${imgIdx.toString()}`}
                onClick={changeImg}
              ></button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TodaysRecommendBanner;
