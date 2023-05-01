import "./css/menuItem.css";

interface Image {
  large_cover_image: string;
}

interface MenuItemProps {
  img: Image;
}

const MenuItem = ({ img }: MenuItemProps) => {
  return (
    <div className="menuItemContainer">
      <img className="menuItem" src={img.large_cover_image} alt="사진" />
    </div>
  );
};

export default MenuItem;
