import React from "react";
import Select from "react-select";

function EditItem() {
  const saleAsOptions = [
    { value: 1, label: "Open" },
    { value: 2, label: "Close" }
  ];
  const quantityGroup = [
    { value: 1, label: "1 kg" },
    { value: 2, label: "500 gm" },
    { value: 3, label: "100 gm" }
  ];
  return (
    <div className="ui centered center aligned grid margin-no height-full">
      <div className="fourteen wide middle aligned column">
        <div className="ui segment">
          <p>Item Name</p>
          <div className="ui form">
            <div className="field">
              <label>Sale as</label>
              <Select options={saleAsOptions} />
            </div>
            <div className="field">
              <label>Price</label>
              <div className="two fields">
                <div className="field">
                  <input type="number" placeholder="Enter Amount" />
                </div>
                <div className="field">
                  <Select options={quantityGroup} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <p>Sale as</p>
            <Select options={saleAsOptions} />
          </div>
          <div>
            <p>Sale as</p>
            <Select options={saleAsOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditItem;
