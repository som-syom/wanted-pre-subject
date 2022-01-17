import React from "react";
import "./stylesheets/NaviBar.css";
import IconMenu from "./assets/icon-menu.png";
import TitleLogo from "./assets/wanted_Logo_black.png";
import SearchBtn from "./assets/search.svg";
import NewIcon from "./assets/new.svg";
import BetaIcon from "./assets/beta.svg";
import MenuBtn from "./assets/dot.svg";

function NaviBar() {
  return (
    <>
      <header className="navibar">
        <section className="navibar-wrap">
          <div className="navibar-container">
            <div className="navibar__left">
              <div className="navibar__left__default">
                <div className="navibar__left__hamberger-wrap">
                  <button className="navibar__left__menu-btn">
                    <img
                      src={IconMenu}
                      alt="hamberger menu"
                      className="navibar__left__menu-btn__hamberger"
                    />
                  </button>
                </div>
                <button className="navibar__left__menu-btn">
                  <img
                    src={TitleLogo}
                    alt="wanted title logo"
                    className="navibar__left__menu-btn__title"
                  />
                </button>
              </div>
              <button className="navibar__left__signup-btn">
                회원가입하기
              </button>
            </div>
            <ul className="navibar__middle">
              <li className="navibar__middle__menu-btn btn navibar-left__home-btn">
                홈
              </li>
              <li className="navibar__middle__menu-btn btn">채용</li>
              <li className="navibar__middle__menu-btn btn">이벤트</li>
              <li className="navibar__middle__menu-btn btn more-visible">
                직군별 연봉
              </li>
              <li className="navibar__middle__menu-btn btn more-visible">
                이력서
              </li>
              <li className="navibar__middle__menu-btn btn more-visible">
                커뮤니티
                <em>
                  <img src={NewIcon} alt="new" />
                </em>
              </li>
              <li className="navibar__middle__menu-btn btn more-visible">
                프리랜서
              </li>
              <li className="navibar__middle__menu-btn btn more-visible">
                AI 합격예측
                <em>
                  <img src={BetaIcon} alt="beta" />
                </em>
              </li>
            </ul>
            <div className="navibar__right">
              <button className="navibar__right__menu-btn">
                <img
                  src={SearchBtn}
                  alt="search button"
                  className="navibar__right__menu-btn__search"
                />
              </button>
              <button className="navibar__right__menu-btn navibar__signin-btn">
                회원가입/로그인
              </button>
              <div className="navibar__right__menu-btn__division">
                <button className="navibar__right__menu-btn navibar__dashboard-btn">
                  기업서비스
                </button>
              </div>
              <button className="navibar__right__menu-btn__menu">
                <img src={MenuBtn} alt="menu" />
              </button>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}

export default NaviBar;
