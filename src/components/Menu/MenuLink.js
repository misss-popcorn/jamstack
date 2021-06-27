import { NavLink, useLocation } from "react-router-dom";
import { imageMap } from "../../constants/imageMap";
import "./MenuLink.scss";

const MenuLink = ({ menu }) => {
  let location = useLocation();
  let image = imageMap[menu.icon];
  if (location.pathname === menu.route) {
    const activeIcon = `active${menu.icon}`;
    image = imageMap[activeIcon];
  }
  return (
    <>
      <div className="menuItem">
        <NavLink
          to={menu.route}
          activeClassName={"active"}
          isActive={(match, location) => {
            if (match && match.url === menu.route) {
              return true;
            }
          }}
        >
          <img src={image} alt="icon"></img>
          {menu.name}
        </NavLink>
      </div>
    </>
  );
};
export default MenuLink;
