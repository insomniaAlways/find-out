import React from "react";
import PropTypes from "prop-types";

function ItemAction(props) {
  const { onEdit, onDelete } = props;

  return (
    <div className="ui three column centered grid margin-no padding-vs-top">
      <div className="column text-center padding-vs-vertical text-color-green">
        <span className="cursor-pointer" onClick={onEdit}>
          Edit
        </span>
      </div>
      <div className="column text-center padding-vs-vertical text-color-red">
        <span className="cursor-pointer" onClick={onDelete}>
          Delete
        </span>
      </div>
    </div>
  );
}

export default ItemAction;

ItemAction.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};
