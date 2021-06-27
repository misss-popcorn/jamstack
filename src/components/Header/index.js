import { Link } from "react-router-dom";

import "./index.scss";

import Logo from "../../images/logo.jpg";
import LogoutIcon from "../../images/icons/logout@2x.png";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="logo" className="logo" />
      <div className="logout">
        <Link to="/login">
          <img src={LogoutIcon} alt="icon" />
          Logout
        </Link>
      </div>
    </header>
  );
};
export default Header;
