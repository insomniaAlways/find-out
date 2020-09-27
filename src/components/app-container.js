import React from "react";
import BottomTab from "./bottom-tab";
import PropTypes from "prop-types";

function AppContainer(props) {
  const { children } = props;
  return (
    <div className="app-container">
      {children}
      <BottomTab />
    </div>
  );
}

export default AppContainer;

AppContainer.propTypes = {
  children: PropTypes.element.isRequired
};
