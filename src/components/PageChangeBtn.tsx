import { useNavigate } from "react-router-dom";

interface PageChangeBtnProps {
  state: string;
  id: string;
  text: string;
}

const PageChangeBtn = ({ state, id, text }: PageChangeBtnProps) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/${state}`);
  };

  return (
    <>
      <input
        type="radio"
        placeholder={state}
        name={id}
        id={id}
        onClick={onClick}
        style={{ display: "none" }}
      ></input>
      <label className="fontsize" htmlFor={id}>
        {text}
      </label>
    </>
  );
};

export default PageChangeBtn;
