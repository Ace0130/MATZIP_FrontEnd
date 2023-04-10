import "./css/categoryBtn.css";

interface ICategoryBtnProps {
  context: string;
}

const CategoryBtn = ({ context }: ICategoryBtnProps) => {
  return (
    <div className="categoryBtn">
      <button>{context}</button>
    </div>
  );
};

export default CategoryBtn;
