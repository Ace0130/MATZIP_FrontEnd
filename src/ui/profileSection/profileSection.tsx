import { useEffect, useState } from "react";
import "./css/profileSection.css";

const ProfileSection = () => {
  const [img, setImg] = useState<File | null>(null);
  const [modifiedImg, setModifiedImg] = useState<File | null>(null);
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
  const [changedModal, setChangedModal] = useState(false);

  const clickModify = () => {
    setImg(modifiedImg);
    setName(modifiedName);
    setPassword(modifiedPassword);
    setIntro(modifiedIntro);
  };

  const modifyPassword = () => {
    setChangedModal(true);
  };

  const uploadImg = (event: React.ChangeEvent<HTMLInputElement>) => {
    setModifiedImg(event.target.files?.[0] ?? null);
  };

  const toggleModal = () => {
    setModal((modal) => !modal);
    setChangedModal(false);
    setModifiedImg(img);
    setModifiedName(name);
    setModifiedPassword(password);
    setModifiedIntro(intro);
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

  // TODO: 비밀번호 수정 (버튼 누르면 모달 내용 바뀜) 기능 적용, 피그마 수정된 디자인 UI 반영

  return (
    <>
      <div className="profileSectionContainer">
        <div className="profileInfoContainer">
          <div className="profileBaseInfoContainer">
            <img
              src={img ? URL.createObjectURL(img) : "./images/profile.svg"}
              alt="프로필"
            />
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
          <div className={value === 1 ? "selectedTab" : undefined}></div>
          <div className={value === 2 ? "selectedTab" : undefined}>2</div>
          <div className={value === 3 ? "selectedTab" : undefined}>3</div>
        </div>
      </div>
      {modal ? (
        <div className="profileModal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modalContent">
            {!changedModal ? (
              <div className="passwordContent">
                <div className="profileContent">
                  <div className="basicInfo">
                    <input
                      type="file"
                      id="fileInput"
                      accept="image/*"
                      onChange={uploadImg}
                    />
                    <label htmlFor="fileInput">
                      <img
                        src={
                          modifiedImg
                            ? URL.createObjectURL(modifiedImg)
                            : "./images/profile.svg"
                        }
                        alt="프로필"
                      />
                    </label>
                    <span>{name}</span>
                  </div>
                  <div className="detailInfo">
                    <div className="profileInputContainer">
                      <label>닉네임</label>
                      <input
                        type="text"
                        value={modifiedName}
                        onChange={(event) =>
                          setModifiedName(event.target.value)
                        }
                      />
                    </div>
                    <div className="profileInputContainer">
                      <label>비밀번호</label>
                      <input
                        type="password"
                        value={modifiedPassword}
                        onChange={(event) =>
                          setModifiedPassword(event.target.value)
                        }
                        disabled
                      />
                      <button onClick={modifyPassword}>비밀번호 수정</button>
                    </div>
                    <div className="profileInputContainer">
                      <label>소개</label>
                      <textarea
                        cols={30}
                        rows={3}
                        value={modifiedIntro}
                        onChange={(event) =>
                          setModifiedIntro(event.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="btnContainer">
                  <button onClick={clickModify}>수정</button>
                  <button onClick={toggleModal}>닫기</button>
                </div>
              </div>
            ) : (
              <div className="profileContent">
                <div className="passwordContent">
                  <div className="detailInfo">
                    <h1>비밀번호 수정</h1>
                    <div>
                      <div className="profileInputContainer">
                        <label>현재 비밀번호</label>
                        <input type="password" />
                      </div>
                      <div className="profileInputContainer">
                        <label>새 비밀번호</label>
                        <input type="password" />
                      </div>
                      <div className="profileInputContainer">
                        <label>비밀번호 확인</label>
                        <input type="password" />
                      </div>
                    </div>
                    <div className="btnContainer">
                      <button onClick={clickModify}>수정</button>
                      <button onClick={toggleModal}>닫기</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProfileSection;
