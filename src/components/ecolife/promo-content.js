import React from "react";

function PromoContent() {
  return (
    <div className="ui horizontal segments">
      <div className="ui segment">
        <div className="ui grid">
          <div className="four wide middle aligned column">
            <img src="/assets/images/static-icons-1_small.png" alt="" />
          </div>
          <div className="twelve wide middle aligned column">
            <h4 style={{ color: "#242424" }}>Free Shipping</h4>
            <p style={{ color: "#757575" }}>On all orders over $75.00</p>
          </div>
        </div>
      </div>
      <div className="ui segment">
        <div className="ui grid">
          <div className="four wide middle aligned column">
            <img src="/assets/images/static-icons-2_small.png" alt="" />
          </div>
          <div className="twelve wide middle aligned column">
            <h4 style={{ color: "#242424" }}>Free Returns</h4>
            <p style={{ color: "#757575" }}>Returns are free within 9 days</p>
          </div>
        </div>
      </div>
      <div className="ui segment">
        <div className="ui grid">
          <div className="four wide middle aligned column">
            <img src="/assets/images/static-icons-3_small.png" alt="" />
          </div>
          <div className="twelve wide middle aligned column">
            <h4 style={{ color: "#242424" }}>100% Payment Secure</h4>
            <p style={{ color: "#757575" }}>Your payment are safe with us.</p>
          </div>
        </div>
      </div>
      <div className="ui segment">
        <div className="ui grid">
          <div className="four wide middle aligned column">
            <img src="/assets/images/static-icons-4_small.png" alt="" />
          </div>
          <div className="twelve wide middle aligned column">
            <h4 style={{ color: "#242424" }}>Support 24/7</h4>
            <p style={{ color: "#757575" }}>Contact us 24 hours a day</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromoContent;
