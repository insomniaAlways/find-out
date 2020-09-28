import React from "react";
import { Link } from "react-router-dom";

function BottomTab() {
  return (
    <div className="bottom-tab">
      <div className="ui fluid three item labeled icon menu">
        <Link to="/admin/dashboard" className="item padding-vs-top padding-vs-bottom">
          <i aria-hidden="true" className="icon">
            <img src="/assets/icons/desktop.png" alt="" className="bottom-tab-icon" />
          </i>
          <div className="bottom-tab-item">DASHBOARD</div>
        </Link>
        <Link to="/admin/stocks" className="item padding-vs-top padding-vs-bottom">
          <i aria-hidden="true" className="icon">
            <img src="/assets/icons/home.png" alt="" className="bottom-tab-icon" />
          </i>
          <div className="text-center bottom-tab-item">STOCK</div>
        </Link>
        <Link to="/admin/stocks" className="item padding-vs-top padding-vs-bottom">
          <i aria-hidden="true" className="icon">
            <img src="/assets/icons/list.png" alt="" className="bottom-tab-icon" />
          </i>
          <div className="text-center bottom-tab-item">ORDERS</div>
        </Link>
      </div>
    </div>
  );
}

export default BottomTab;
