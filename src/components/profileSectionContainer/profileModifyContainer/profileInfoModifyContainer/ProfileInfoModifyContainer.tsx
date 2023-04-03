import "./css/ProfileInfoModifyContainer.css";

const ProfileInfoModifyContainer = () => {
  return (
    <div className="profileInfoModifyContainer">
      <label htmlFor="" className="titleLabel">
        프로필 정보 수정
      </label>
      <div className="inputContainer">
        <label htmlFor="" className="inputLabel">
          닉네임
        </label>
        <input type="text" />
      </div>
      <div className="inputContainer">
        <label htmlFor="" className="inputLabel">
          비밀번호
        </label>
        <input type="password" />
      </div>
    </div>
  );
};

export default ProfileInfoModifyContainer;
