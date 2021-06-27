import * as React from "react";
import PropTypes from "prop-types";

import "./index.scss";

const PrimaryButton = ({ text, onClick }) => {
  return (
    <button className="primaryButton" onClick={onClick}>
      {text}
    </button>
  );
};

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default PrimaryButton;
