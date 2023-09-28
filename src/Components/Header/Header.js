import React from "react";
import { AiOutlineBell } from "react-icons/ai";
import { BsBrightnessHigh } from "react-icons/bs";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="admin-profile">
        <img src="./img/1.jpg" alt="admin profile" />
        <div>
          <h1>رضا شاکری</h1>
          <h3>برنامه نویس فرانت</h3>
        </div>
      </div>
      <div className="header-left-section">
        <div className="search-box">
          <input type="text" placeholder="جستجو بکنید" />
          <button>جستجو</button>
        </div>
        <button className="header-left-icon">
          <AiOutlineBell />
        </button>
        <button className="header-left-icon">
          <BsBrightnessHigh />
        </button>
      </div>
    </div>
  );
}
