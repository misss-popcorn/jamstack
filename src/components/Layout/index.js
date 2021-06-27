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
export default Layout;
