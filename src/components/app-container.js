import React, { Fragment } from "react";
import PropTypes from "prop-types";
import NavBar from "./nav-bar";

function AppContainer(props) {
  const { children } = props;

  return (
    <Fragment>
      <NavBar />
      {children}
    </Fragment>
  );
}

export default AppContainer;

AppContainer.propTypes = {
  children: PropTypes.element.isRequired
};
