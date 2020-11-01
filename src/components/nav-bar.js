import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="ui stackable top fixed menu">
        <Link to="/" className="item">
          <div className="text-center bottom-tab-item">H</div>
        </Link>
        {/* <img src="/images/logo.png" alt="" /> */}
        <div className="right menu">
          <Link to="/category" className="item">
            <div className="text-center bottom-tab-item">Category</div>
          </Link>
          <div className="item">Shops</div>
          <div className="item">Sign-in</div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
