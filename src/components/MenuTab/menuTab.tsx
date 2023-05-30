import React from "react";
import { useState } from "react";
import Info from "../../ui/detailSection/information";
import Menu from "../../ui/detailSection/menuSecion";
import Review from "../../ui/detailSection/reviewSection";
import "../MenuTab/css/menuTab.css";

const menuList: { [key: string]: any } = {
  Info: <Info />,
  Menu: <Menu />,
  Review: <Review />,
};

function MenuTab() {
  const [menu, setMenu] = useState<string>("Info");

  const changeMenu = (menu: string) => {
    setMenu(menu);
  };

  return (
    <div className="wrap">
      <div className="menuBar">
        <ul className="tabs">
          <div
            className={`${menu === "Info" ? "active" : ""}`}
            onClick={() => changeMenu("Info")}
          >
            <button>Info</button>
          </div>

          <div
            className={`${menu === "Menu" ? "active" : ""}`}
            onClick={() => changeMenu("Menu")}
          >
            <button>Menu</button>
          </div>

          <div
            className={`${menu === "Review" ? "active" : ""}`}
            onClick={() => changeMenu("Review")}
          >
            <button>Review</button>
          </div>
        </ul>
      </div>
      <div className="contentArea">{menuList[menu]}</div>
    </div>
  );
}

export default MenuTab;
