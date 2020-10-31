import React from "react";

function NavBar() {
  return (
    <>
      <div className="ui stackable top fixed menu">
        <div className="item">
          <img src="/images/logo.png" alt="" />
        </div>
        <div className="right menu">
          <div className="item">Category</div>
          <div className="item">Shops</div>
          <div className="item">Sign-in</div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
