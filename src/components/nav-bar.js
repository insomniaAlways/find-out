import React from "react";

function NavBar() {
  return (
    <>
      <div className="ui stackable top fixed menu">
        <div className="item">
          <img src="/images/logo.png" alt="" />
        </div>
        <div className="right menu">
          <a className="item">Category</a>
          <a className="item">Shops</a>
          <a className="item">Sign-in</a>
        </div>
      </div>
    </>
  );
}

export default NavBar;
