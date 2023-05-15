import React, { useState } from 'react';
import DropdownBox from './components/dropdownBox';

export default function TestUI() {
  const [drop, setDrop] = useState(true);
  return (
    <div
      style={{
        width: '100vh',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
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
        <DropdownBox
          items={[
            { name: '로그인', link: '/login' },
            { name: '회원가입', link: '/signup' },
          ]}
          status={drop}
        />
      </div>
    </div>
  );
}
