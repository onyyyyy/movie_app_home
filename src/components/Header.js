import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";
import { mainColors } from "../style/GlobalStyled";
import { useEffect, useRef } from "react";

const Sheader = styled.header`
  width: 100%;
  padding: 20px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;
const Logo = styled.div`
  font-size: 26px;
  font-weight: 700;
  a {
    color: ${mainColors.pointColor};
  }
`;
const Menu = styled.ul`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  li {
    margin-left: 50px;
  }
`;

export const Header = () => {
  const headerRef = useRef();

  const scrollHandler = () => {
    const pageY = window.scrollY;
    // console.log(pageY);
    // console.log("ok");
    // console.log(headerRef);
    const { current } = headerRef;

    if (pageY > 300) {
      current.style.position = "fixed";
      current.style.backgroundColor = "rgba(0,0,0,0.7)";
      current.style.backdropFilter = "blur(2px)";
    } else {
      current.style.position = "absolute";
      current.style.backgroundColor = "transparent";
      current.style.backdropFilter = "blur(0px)";
    }
  };

  useEffect(() => {
    return window.addEventListener("scroll", scrollHandler);
  });

  return (
    <Sheader ref={headerRef}>
      <Logo>
        <Link to={routes.home}>MOVIE</Link>
      </Logo>
      <Menu>
        <li>
          <Link to={routes.home}>Home</Link>
        </li>
        <li>
          <Link to={routes.search}>Search</Link>
        </li>
      </Menu>
    </Sheader>
  );
};
