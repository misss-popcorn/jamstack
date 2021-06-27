import PropTypes from "prop-types";

import Header from "../Header";
import Menu from "../Menu";

import "./index.scss";

const Layout = ({ children, menuOptions }) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="mainSection">
        <Menu menuOptions={menuOptions} />
        <section>{children}</section>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  menuOptions: PropTypes.array.isRequired,
};
export default Layout;
