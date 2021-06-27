import "./index.scss";

import LogoImage from "../../images/logo.jpg";

const OuterLogo = () => {
  return (
    <div className="logo">
      <img src={LogoImage} alt="logo" />
    </div>
  );
};
export default OuterLogo;
