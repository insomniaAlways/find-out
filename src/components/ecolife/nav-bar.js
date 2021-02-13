import React from "react";
import { useState } from "react";
import { Input, Menu, Sticky } from "semantic-ui-react";

export default function NavBar({ contextRef }) {
  const [activeItem, updateState] = useState("home");

  const handleItemClick = (e, { name }) => updateState(name);

  return (
    <Sticky context={contextRef}>
      <Menu secondary className="bg-white padding-md-top padding-md-bottom margin-bottom-no">
        <Menu.Item header className="text-size-big padding-sm nav-bar-brand-name">
          Find out
        </Menu.Item>
        <Menu.Item name="home" active={activeItem === "home"} onClick={handleItemClick} />
        <Menu.Item name="messages" active={activeItem === "messages"} onClick={handleItemClick} />
        <Menu.Item name="friends" active={activeItem === "friends"} onClick={handleItemClick} />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item name="logout" active={activeItem === "logout"} onClick={handleItemClick} />
        </Menu.Menu>
      </Menu>
    </Sticky>
  );
}
