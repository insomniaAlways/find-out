import React from "react";
import Select from "react-select";

function EditItem(props) {
  const saleAsOptions = [
    { value: 1, label: "Open" },
    { value: 2, label: "Close" }
  ];
  const quantityGroup = [
    { value: 1, label: "1 kg" },
    { value: 2, label: "500 gm" },
    { value: 3, label: "100 gm" }
  ];
  const units = [
    { value: 1, label: "Kilo gram" },
    { value: 2, label: "Gram" },
    { value: 3, label: "Liter" },
    { value: 4, label: "Mili Liter" },
    { value: 5, label: "Meter" }
  ];
  const navigateTo = (path) => {
    props.history.push(path);
  };
  const save = () => {
    navigateTo("/admin/stock/item");
  };
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
            <div className="field">
              <label>MRP</label>
              <div className="two fields">
                <div className="field">
                  <input type="number" placeholder="Enter Amount" />
                </div>
                <div className="field">
                  <Select options={quantityGroup} />
                </div>
              </div>
            </div>
            <div className="field">
              <label>Current Available</label>
              <div className="two fields">
                <div className="field">
                  <input type="number" placeholder="Enter Value" />
                </div>
                <div className="field">
                  <Select options={units} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <p>Sale as</p>
            <Select options={saleAsOptions} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column text-center">
          <div className="ui positive button button-size-long border-radius-fifty" onClick={save}>
            save
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditItem;
