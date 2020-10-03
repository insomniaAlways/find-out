import React from "react";
import PropTypes from "prop-types";

function StockHome(props) {
  const { history } = props;

  const navigateTo = (path) => {
    history.push(path);
  };
  const create = () => {
    navigateTo("/admin/stock/category/create");
  };

  return (
    <div className="ui two column centered center aligned grid margin-no height-full">
      <div className="middle aligned column shadow-button cursor-pointer" onClick={create}>
        Add new Category
      </div>
    </div>
  );
}

export default StockHome;

StockHome.propTypes = {
  history: PropTypes.object.isRequired
};
