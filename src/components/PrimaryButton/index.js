import * as React from "react";
import "./index.scss";

const PrimaryButton = React.memo(({ text, onClick }) => {
  return (
    <button className="primaryButton" onClick={onClick}>
      {text}
    </button>
  );
});
export default PrimaryButton;
