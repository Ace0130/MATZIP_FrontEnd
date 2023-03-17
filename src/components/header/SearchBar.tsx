import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./css/SearchBar.css";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <input
        className="input"
        type="text"
        placeholder="검색할 키워드를 입력해주세요."
      />
      <button>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
};

export default SearchBar;
