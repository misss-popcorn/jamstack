import { Link } from "react-router-dom";
import Dashboard from "../../images/icons/dashboard@2x.png";
import IncomingEnquiries from "../../images/icons/incoming-enq@2x.png";
import IncomingQuotations from "../../images/icons/incoming-qout@2x.png";
import Products from "../../images/icons/product@2x.png";
import MyRequests from "../../images/icons/my-request@2x.png";
import OrderHistory from "../../images/icons/order@2x.png";
import Profile from "../../images/icons/profile@2x.png";
import Settings from "../../images/icons/setting@2x.png";
import "./MenuLink.scss";

const imageMap = {
  dashboard: Dashboard,
  incomingEnquiries: IncomingEnquiries,
  incomingQuotations: IncomingQuotations,
  products: Products,
  myRequests: MyRequests,
  orderHistory: OrderHistory,
  profile: Profile,
  settings: Settings,
};

const MenuLink = ({ menu }) => {
  return (
    <>
      <div className="menuItem">
        <img src={imageMap[menu.icon]} alt="icon"></img>

        <Link to={menu.route}>{menu.name}</Link>
      </div>
    </>
  );
};
export default MenuLink;
