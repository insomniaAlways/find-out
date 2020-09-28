import React, { Fragment } from "react";
import PropTypes from "prop-types";

function WithHeaderBar(props) {
  const { children, title } = props;
  return (
    <Fragment>
      <div className="ui segment header-bar border-radius-none text-center text-size-large text-color-positive text-weight-medium margin-no">
        {title}
      </div>
      {children}
    </Fragment>
  );
}

export default WithHeaderBar;

WithHeaderBar.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired
};
