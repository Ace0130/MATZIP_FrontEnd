import "./css/categoryMenu.css";

interface Image {
  large_cover_image: string;
}

interface Props {
  img: Image;
}

const CategoryMenu = ({ img }: Props) => {
  return (
    <div className="categoryMenuItemContainer">
      <img
        className="categoryMenuItem"
        src={img.large_cover_image}
        alt="사진"
      />
    </div>
  );
};

export default CategoryMenu;
