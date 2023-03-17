import "./css/CategoryMenuItem.css";

interface Image {
  large_cover_image: string;
}

interface CategoryMenuItemProps {
  img: Image;
  idx: string;
}

const CategoryMenuItem = ({ img, idx }: CategoryMenuItemProps) => {
  return (
    <div key={idx} className="categoryMenuItemContainer">
      <img
        className="categoryMenuItem"
        src={img.large_cover_image}
        alt="사진"
      />
    </div>
  );
};

export default CategoryMenuItem;
