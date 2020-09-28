import React from "react";
import WithHeaderBar from "../../../../components/header-bar";
import Select from "react-select";
import PropTypes from "prop-types";

function CreateCategory(props) {
  const { history } = props;
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
  ];

  const navigateTo = (path) => {
    history.push(path);
  };
  const addCategory = () => {
    navigateTo("/admin/stock/item");
  };
  return (
    <WithHeaderBar title="Add Category">
      <div className="ui centered grid margin-no" style={{ height: "calc(100vh - 116px)" }}>
        <div className="ten wide middle aligned column">
          <div className="margin-bottom-fifteen text-size-medium">Select category</div>
          <Select options={options} />
          <div className="margin-top-thirty">
            <div
              className="ui positive button button-size-long border-radius-fifty"
              onClick={addCategory}
            >
              Add
            </div>
          </div>
        </div>
      </div>
    </WithHeaderBar>
  );
}

export default CreateCategory;

CreateCategory.propTypes = {
  history: PropTypes.object.isRequired
};
