import { Link } from "react-router-dom";
import "./css/detailSection.css";
import Menutab from "../../components/MenuTab/menuTab";

const DetailSection = () => {
  return (
    <div className="dWrapper">
      <div className="imgZone">
        <img
          src="data:image/jpeg;base64,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"
          className="main"
        />
      </div>
      <div className="mWrapper">
        <Menutab />
      </div>
    </div>
  );
};

export default DetailSection;
