import React from "react";
import { Button } from "react-bootstrap";

function StockHome() {
  return (
    <div className="d-flex justify-content-center heigth-full align-items-center">
      <div>
        <Button className="shadow-button" size="lg">
          Add new Category
        </Button>
      </div>
    </div>
  );
}

export default StockHome;
