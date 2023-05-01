import "./css/categoryBtn.css";

interface CategoryBtnProps {
  context: string;
}

const CategoryBtn = ({ context }: CategoryBtnProps) => {
  return (
    <div className="categoryBtn">
      <button>{context}</button>
    </div>
  );
};

export default CategoryBtn;
