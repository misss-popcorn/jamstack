import * as React from "react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import { imageMap } from "../../constants/imageMap";
import "./MenuLink.scss";

const MenuLink = ({ name, route, icon }) => {
  let location = useLocation();
  let image = imageMap[icon];
  if (location.pathname === route) {
    const activeIcon = `active${icon}`;
    image = imageMap[activeIcon];
  }
  return (
    <>
      <div className="menuItem">
        <NavLink
          to={route}
          activeClassName={"active"}
          isActive={(match, location) => {
            if (match && match.url === route) {
              return true;
            }
          }}
        >
          <img src={image} alt="icon"></img>
          {name}
        </NavLink>
      </div>
    </>
  );
};

MenuLink.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};
export default React.memo(MenuLink);
