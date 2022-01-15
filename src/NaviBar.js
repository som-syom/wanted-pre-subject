import React from "react";
import "./stylesheets/NaviBar.css";
import icon_menu from "./assets/icon-menu.png";
import title_logo from "./assets/wanted_Logo_black.png";

function NaviBar() {
  return (
    <>
      <section className="navibar-wrap">
        <div className="navibar-container">
          <div className="navibar__left">
            <button className="navibar__left__menu-btn">
              <img
                src={icon_menu}
                alt="hamberger menu"
                className="navibar__left__menu-btn__hamberger"
              />
            </button>
            <button className="navibar__left__menu-btn">
              <img
                src={title_logo}
                alt="wanted title logo"
                className="navibar__left__menu-btn__title"
              />
            </button>
          </div>
          <div className="navibar__middle">
            <button className="navibar__middle__menu-btn">채용</button>
            <button className="navibar__middle__menu-btn">이벤트</button>
            <button className="navibar__middle__menu-btn">직군별 연봉</button>
            <button className="navibar__middle__menu-btn">이력서</button>
            <button className="navibar__middle__menu-btn">커뮤니티</button>
            <button className="navibar__middle__menu-btn">프리랜서</button>
            <button className="navibar__middle__menu-btn">AI 합격예측</button>
          </div>
          <div className="navibar__right">
            <button className="navibar__right__menu-btn">검색</button>
            <button className="navibar__right__menu-btn">
              회원가입/로그인
            </button>
            <button className="navibar__right__menu-btn">기업서비스</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default NaviBar;
