import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function BottomTab() {
  return (
    <Nav fill className="bottom-tab">
      <LinkContainer to="/admin/dashboard">
        <Nav.Link eventKey="/admin/dashboard">
          <div className="text-center">
            <img src="/assets/icons/desktop.png" alt="" className="bottom-tab-icon" />
          </div>
          <div className="text-center bottom-tab-item">DASHBOARD</div>
        </Nav.Link>
      </LinkContainer>
      <Nav.Item>
        <LinkContainer to="/admin/stocks">
          <Nav.Link eventKey="/admin/stocks">
            <div className="text-center">
              <img src="/assets/icons/home.png" alt="" className="bottom-tab-icon" />
            </div>
            <div className="text-center bottom-tab-item">STOCK</div>
          </Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/admin/stocks">
          <Nav.Link eventKey="/admin/stocks">
            <div className="text-center">
              <img src="/assets/icons/list.png" alt="" className="bottom-tab-icon" />
            </div>
            <div className="text-center bottom-tab-item">ORDERS</div>
          </Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </Nav>
  );
}

export default BottomTab;
