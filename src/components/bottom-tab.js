import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

function BottomTab() {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (e, { name }) => setActiveItem(name);
  return (
    <div className="bottom-tab mobile-menu">
      <Menu>
        <Menu.Item as="div">
          <Link to="/">FO</Link>
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
    </div>
  );
}

export default BottomTab;
