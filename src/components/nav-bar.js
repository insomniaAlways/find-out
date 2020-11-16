import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import BottomTab from "./bottom-tab";

function NavBar() {
  const [ activeItem, setActiveItem ] = useState("");

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <>
      <Menu stackable className="desktop-menu margin-no">
        <Menu.Item as="div">
          <Link to="/">H</Link>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            as="div"
            name="category"
            active={activeItem === "category"}
            onClick={handleItemClick}
          >
            <Link to="/category">Category</Link>
          </Menu.Item>

          <Menu.Item as="div" name="shop" active={activeItem === "shop"} onClick={handleItemClick}>
            <Link to="/shop">Shop</Link>
          </Menu.Item>

          <Menu.Item
            as="div"
            name="sign-in"
            active={activeItem === "sign-in"}
            onClick={handleItemClick}
          >
            <Link to="/">Sign In</Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <BottomTab />
    </>
  );
}

export default NavBar;
