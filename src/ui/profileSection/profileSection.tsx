import { useEffect, useState } from "react";
import "./css/profileSection.css";

const ProfileSection = () => {
  const [name, setName] = useState("yno1109");
  const [modifiedName, setModifiedName] = useState("");
  const [password, setPassword] = useState("1234");
  const [modifiedPassword, setModifiedPassword] = useState("");
  const [intro, setIntro] = useState(
    "안녕하세요. 맛집을 많이 알고 싶은 사람입니다."
  );
  const [modifiedIntro, setModifiedIntro] = useState("");
  const [value, setValue] = useState(1);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal((modal) => !modal);
    setModifiedName(name);
    setModifiedPassword(password);
    setModifiedIntro(intro);
  };

  const clickModify = () => {
    setName(modifiedName);
    setPassword(modifiedPassword);
    setIntro(modifiedIntro);
  };

  useEffect(() => {
    const body = document.querySelector("body");

    if (modal) {
      body?.classList.add("noScroll");
    }

    return () => {
      body?.classList.remove("noScroll");
    };
  }, [modal]);

  // TODO: 뒷 배경 blur처리하고 disabled, 스크롤바 업애는 처리..

  return (
    <>
      <div className="profileSectionContainer">
        <div className="profileInfoContainer">
          <div className="profileBaseInfoContainer">
            <img src="./images/profile.svg" alt="프로필" />
            <div className="profileTextInfoContainer">
              <div className="profileInfoModifyContainer">
                <span>{name}</span>
                <button onClick={toggleModal}>프로필 수정</button>
              </div>
              <span>{intro}</span>
            </div>
          </div>
          <div className="profileDetailInfoContainer">
            <div className="profileDetailInfo">
              <span>선호하는 음식</span>
              <span>한식</span>
            </div>
            <div className="profileDetailInfo">
              <span>팔로윙</span>
              <span>34</span>
            </div>
            <div className="profileDetailInfo">
              <span>팔로워</span>
              <span>35</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="tabBtnContainer">
          <button
            className={value === 1 ? "selectedBtn" : undefined}
            onClick={() => setValue(1)}
          >
            <img src="./images/pencil.svg" alt="아이콘" />
            작성한 리뷰
          </button>
          <button
            className={value === 2 ? "selectedBtn" : undefined}
            onClick={() => setValue(2)}
          >
            <img src="./images/heart.svg" alt="아이콘" />
            공감한 리뷰
          </button>
          <button
            className={value === 3 ? "selectedBtn" : undefined}
            onClick={() => setValue(3)}
          >
            <img src="./images/photo.svg" alt="아이콘" />
            업로드한 사진
          </button>
        </div>
        <div className="tabContainer">
          <div className={value === 1 ? "selectedTab" : undefined}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, iusto
            sapiente! Veritatis nulla quas laudantium obcaecati. Dolore odio,
            earum dolorem atque, excepturi vero modi fuga deserunt nisi sequi
            suscipit alias. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sunt, iusto sapiente! Veritatis nulla quas laudantium
            obcaecati. Dolore odio, earum dolorem atque, excepturi vero modi
            fuga deserunt nisi sequi suscipit alias. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sunt, iusto sapiente! Veritatis nulla
            quas laudantium obcaecati. Dolore odio, earum dolorem atque,
            excepturi vero modi fuga deserunt nisi sequi suscipit alias. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Sunt, iusto
            sapiente! Veritatis nulla quas laudantium obcaecati. Dolore odio,
            earum dolorem atque, excepturi vero modi fuga deserunt nisi sequi
            suscipit alias.Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sunt, iusto sapiente! Veritatis nulla quas laudantium
            obcaecati. Dolore odio, earum dolorem atque, excepturi vero modi
            fuga deserunt nisi sequi suscipit alias.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sunt, iusto sapiente! Veritatis nulla
            quas laudantium obcaecati. Dolore odio, earum dolorem atque,
            excepturi vero modi fuga deserunt nisi sequi suscipit alias.Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Sunt, iusto
            sapiente! Veritatis nulla quas laudantium obcaecati. Dolore odio,
            earum dolorem atque, excepturi vero modi fuga deserunt nisi sequi
            suscipit alias.Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sunt, iusto sapiente! Veritatis nulla quas laudantium
            obcaecati. Dolore odio, earum dolorem atque, excepturi vero modi
            fuga deserunt nisi sequi suscipit alias.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sunt, iusto sapiente! Veritatis nulla
            quas laudantium obcaecati. Dolore odio, earum dolorem atque,
            excepturi vero modi fuga deserunt nisi sequi suscipit alias.Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Sunt, iusto
            sapiente! Veritatis nulla quas laudantium obcaecati. Dolore odio,
            earum dolorem atque, excepturi vero modi fuga deserunt nisi sequi
            suscipit alias.Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sunt, iusto sapiente! Veritatis nulla quas laudantium
            obcaecati. Dolore odio, earum dolorem atque, excepturi vero modi
            fuga deserunt nisi sequi suscipit alias.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sunt, iusto sapiente! Veritatis nulla
            quas laudantium obcaecati. Dolore odio, earum dolorem atque,
            excepturi vero modi fuga deserunt nisi sequi suscipit alias.
          </div>
          <div className={value === 2 ? "selectedTab" : undefined}>2</div>
          <div className={value === 3 ? "selectedTab" : undefined}>3</div>
        </div>
      </div>
      {modal ? (
        <div className="profileModal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modalContent">
            <div className="profileContainer">
              <input type="file" id="fileInput" accept="image/*" />
              <label htmlFor="fileInput">
                <img src="./images/profile.svg" alt="프로필" />
              </label>
              <span>{name}</span>
            </div>
            <div className="profileModifyContainer">
              <div className="profileInputContainer">
                <label>닉네임</label>
                <input
                  type="text"
                  value={modifiedName}
                  onChange={(event) => setModifiedName(event.target.value)}
                />
              </div>
              <div className="profileInputContainer">
                <label>비밀번호</label>
                <input
                  type="password"
                  value={modifiedPassword}
                  onChange={(event) => setModifiedPassword(event.target.value)}
                  disabled
                />
              </div>
              <div className="profileInputContainer">
                <label>소개</label>
                <textarea
                  cols={30}
                  rows={3}
                  value={modifiedIntro}
                  onChange={(event) => setModifiedIntro(event.target.value)}
                />
              </div>
              <div className="modifyBtnContainer">
                <button onClick={clickModify}>수정</button>
                <button onClick={toggleModal}>닫기</button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProfileSection;
