import React, { useState } from "react";
import { Menu, Dropdown } from "semantic-ui-react";

const options = [
  { key: 1, text: "My Account", value: 1 },
  { key: 2, text: "Checkout", value: 2 },
  { key: 3, text: "Login", value: 3 },
  { key: 3, text: "Create Account", value: 3 }
];

export default function TopBar() {
  const [activeItem, updateActiveItem] = useState();
  const handleItemClick = (e, { name }) => {
    updateActiveItem(name);
  };
  return (
    <Menu inverted className="margin-bottom-no">
      <Menu.Menu position="right">
        <Menu.Item name="wishlist" active={activeItem === "wishlist"} onClick={handleItemClick} />
        <Menu.Item className="padding-no">
          <Dropdown text="Setting" options={options} simple item />
        </Menu.Item>
        <Menu.Item name="usd" active={activeItem === "usd"} onClick={handleItemClick} />
        <Menu.Item
          name="Select Language"
          active={activeItem === "select-language"}
          onClick={handleItemClick}
        />
      </Menu.Menu>
    </Menu>
  );
}
