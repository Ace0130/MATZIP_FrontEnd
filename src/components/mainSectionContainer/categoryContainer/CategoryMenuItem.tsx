import "./css/CategoryMenuItem.css";

interface Image {
  large_cover_image: string;
}

interface Props {
  img: Image;
}

const CategoryMenuItem = ({ img }: Props) => {
  return (
    <div>
      <img
        className="categoryMenuItem"
        src={img.large_cover_image}
        alt="사진"
      />
    </div>
  );
};

export default CategoryMenuItem;
