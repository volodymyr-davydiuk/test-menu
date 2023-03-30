import React, {memo} from 'react';
import {MenuItem} from "../../Types/data";
import {NavLink} from "react-router-dom";
import styled from '@emotion/styled';

interface MenuItemProps {
  menuItems: MenuItem[];
}

const Nav = styled("nav")`
  width: 100%;
  max-width: fit-content;
  margin: 342px auto 0;
  .menu-link {
    display: block;
    width: fit-content;
    text-decoration: none;
    margin-bottom: 4px;
    padding: 7px 12px 9px;
    opacity: 1;
    height: auto;
    visibility: visible;
    //transition: visibility 1s ease;
    transition: all 1s ease;
    &:hover {
      text-decoration: underline;
    }
    &.active {
      transition: height 1s, visibility 1s ease;
      padding: 0;
      margin: 0;
      height: 0;
      visibility: hidden;
    }
  }
`;

const Index: React.FC<MenuItemProps> = (props) => {
  const {menuItems} = props;

  // console.log(menuItems);
  const homeUrl: string = "/";
  // const slashTest = new RegExp(/[\/]/g);

  return (
    <Nav className={"primary-menu"}>
      {menuItems.map((item, index) => {
        if (item?.attributes?.url && item?.attributes?.title) {
          return (
            <NavLink
              key={index}
              className={"menu-link"}
              to={
                item.attributes.url === homeUrl ?
                  item.attributes.url :
                  `/${item.attributes.url.replace("/", '')}/`
              }
            >
              {item.attributes.title}
            </NavLink>
          )
        }
      })}
    </Nav>
  );
};

export default memo(Index);