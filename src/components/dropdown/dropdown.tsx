import React from "react";
import "./css/dropdown.css";
import { Link } from "react-router-dom";

interface IDropdownItem {
  name: string;
  link: string;
}

interface IDropdownBox {
  items: IDropdownItem[];
  status: boolean;
  onClick?: (index: number) => any;
}

export default function DropdownBox({ items, status, onClick }: IDropdownBox) {
  return (
    <div className={`dropdownBox ${status ? "" : "hideDropdownBox"}`}>
      {items.map((item, index) => (
        <div
          className="dropdownBoxItem"
          key={index}
          onClick={() => (onClick ? onClick(index) : undefined)}
        >
          <Link to={item.link || ""}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
}
