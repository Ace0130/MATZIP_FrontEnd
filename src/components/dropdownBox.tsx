import React from 'react';
import './css/dropdownBox.css';
import { Link } from 'react-router-dom';

/*
// 사용 방법
<div // 여기 div 클릭하면 dropdown 내려옴
  style={{
    width: '20px',
    height: '20px',
    borderRadius: '9999px',
    backgroundColor: 'lightblue',
    position: 'relative',
  }}
  onClick={() => setDrop((temp) => !temp)}
>
  o
  <DropdownBox items={[
    { name: '로그인', link: '/login' },
    { name: '회원가입', link: '/signup' },
  ]} status={drop} />
</div>
*/

interface IDropdownItem {
  name: string;
  link: string;
  onClick?: () => any;
}

interface IDropdownBox {
  items: IDropdownItem[];
  status: boolean;
}

export default function DropdownBox({ items, status }: IDropdownBox) {
  return (
    <div className={`dropdownBox ${status ? '' : 'hideDropdownBox'}`}>
      {items.map((item, index) => (
        <div
          className="dropdownBoxItem"
          key={index}
          onClick={() => (item.onClick ? item.onClick() : undefined)}
        >
          <Link to={item.link || ''}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
}
