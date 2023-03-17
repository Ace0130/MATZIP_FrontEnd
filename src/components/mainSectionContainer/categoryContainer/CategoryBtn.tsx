import "./css/CategoryBtn.css";

interface Props {
  context: string;
}

const CategoryBtn = ({ context }: Props) => {
  return (
    <div className="categoryBtn">
      <button>{context}</button>
    </div>
  );
};

export default CategoryBtn;
